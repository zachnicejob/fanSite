package learn.rumble_ball.controllers;

import learn.rumble_ball.domain.PostService;
import learn.rumble_ball.models.Post;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api/post")
public class PostController {

    private final PostService service;

    public PostController(PostService service) {
        this.service = service;
    }

    @GetMapping
    public List<Post> findAll() {
        return service.findAll();
    }

    @GetMapping("/type/{typeId}")
    public List<Post> findByTypeId(@PathVariable int typeId) {
        return service.findByTypeId(typeId);
    }

    @GetMapping("/{id}")
    public Object findById(@PathVariable int id) {
        return service.findById(id);
    }

//    @PostMapping
//    public ResponseEntity<Object> add(@RequestBody Post agent) {
//        Result<Post> result = service.add(agent);
//        if (result.isSuccess()) {
//            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
//        }
//        return ErrorResponse.build(result);
//    }
//
//    @PutMapping("/{agentId}")
//    public ResponseEntity<Object> update(@PathVariable int agentId, @RequestBody Agent agent) {
//        if (agentId != agent.getAgentId()) {
//            return new ResponseEntity<>(HttpStatus.CONFLICT);
//        }
//
//        Result<Agent> result = service.update(agent);
//        if (result.isSuccess()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//
//        return ErrorResponse.build(result);
//    }
//
//    @DeleteMapping("/{agentId}")
//    public ResponseEntity<Void> deleteById(@PathVariable int agentId) {
//        if (service.deleteById(agentId)) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//    }

}

