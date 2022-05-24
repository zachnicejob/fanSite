package learn.rumble_ball.data;

import learn.rumble_ball.data.mappers.PostMapper;
import learn.rumble_ball.models.Post;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class PostJdbcRepository implements PostRepository {

    private final JdbcTemplate jdbcTemplate;

    public PostJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Post> findAll(){
        final String sql = "select post_id, title, middle_name, last_name, dob, height_in_inches "
                + "from post limit 1000;";
        return jdbcTemplate.query(sql, new PostMapper());

    }

    @Override
    public Post findById(int id){

    }

}
