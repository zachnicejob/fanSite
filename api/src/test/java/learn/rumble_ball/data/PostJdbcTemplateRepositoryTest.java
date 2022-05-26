package learn.rumble_ball.data;

import learn.rumble_ball.data.PostRepository;
import learn.rumble_ball.models.Post;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

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
        List<Post> allPosts = repository.findAll();

        assertNotNull(allPosts);
    }

}