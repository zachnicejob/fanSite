package learn.rumble_ball.domain;

import learn.rumble_ball.data.PostRepository;
import learn.rumble_ball.models.Post;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<Post> findAll() {
        return repository.findAll();
    }

    public Object findById(int id) {
        return repository.findById(id);
    }
}
