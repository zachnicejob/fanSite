package learn.rumble_ball.data;

import learn.rumble_ball.data.PostRepository;
import learn.rumble_ball.models.Post;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PostJdbcTemplateRepositoryTest {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    PostRepository repository;

    static boolean hasRun = false;

    @BeforeEach
    void setup() {
        if (!hasRun) {
            jdbcTemplate.update("call set_known_good_state();");
            hasRun = true;
        }
    }

    @Test
    void hasKnownGoodState() {

        assertNotNull(repository);
    }

    @Test
    void shouldFindAllPosts() {
        Post expected = new Post(1, 1, LocalDate.of(2022,04,25),"First Event!",
                "This is the first event post", "http://pm1.narvii.com/6162/3b1affdff1083383b3a97256a1cf22caa1e8da8a_00.jpg");

        List<Post> allPosts = repository.findAll();

        assertNotNull(allPosts);
        assertTrue(allPosts.size() >= 2);
        assertTrue(allPosts.stream().anyMatch(post -> post.equals(expected)));
    }

    @Test
    void shouldFindById() {
        List<Post> allPosts = repository.findAll();
        assertNotNull(repository.findById(1));

    }
//   public Post(int id, int type, LocalDate postDate, String title, String textBody, String imageLink) {
//        this.id = id;
//        this.type = type;
//        this.postDate = postDate;
//        this.title = title;
//        this.textBody = textBody;
//        this.imageLink = imageLink;
//    }

}