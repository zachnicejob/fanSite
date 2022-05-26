package learn.rumble_ball.data;

import learn.rumble_ball.data.mappers.PostMapper;
import learn.rumble_ball.models.Post;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class PostJdbcTemplateRepository implements PostRepository {

    private final JdbcTemplate jdbcTemplate;

    private final PostMapper rowMapper = new PostMapper();

    public PostJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<Post> findAll(){
        final String sql = "select post_id, type_id, title, post_date, text_body, image_link "
                + "from post limit 1000;";
        return jdbcTemplate.query(sql, rowMapper);

    }

    @Override
    public List<Post> findByTypeId(int typeId){
        final String sql = "select post_id, type_id, title, post_date, text_body, image_link "
                + "from post where type_id = ? limit 1000;";
        return jdbcTemplate.query(sql, rowMapper, typeId);
    }

    @Override
    @Transactional
    public Post findById(int id){
        final String sql = "select post_id, type_id, title, post_date, text_body, image_link "
                + "from post where post_id = ? limit 1000;";
        return jdbcTemplate.query(sql, rowMapper, id).stream()
                .findFirst().orElse(null);
//        final String sql = "select post_id, type_id, title, post_date, text_body, image_link "
//                + "from post where id = ? limit 1000;";
//
//        Post post = jdbcTemplate.query(sql, rowMapper, id).stream()
//                .findFirst().orElse(null);
//
//        return post;
    }
}
