package learn.rumble_ball.data.mappers;

import learn.rumble_ball.models.Post;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
public class PostMapper implements RowMapper {

    @Override
    public Post mapRow(ResultSet resultSet, int i) throws SQLException {
        Post post = new Post();
        post.setId(resultSet.getInt("post_id"));
        post.setType(resultSet.getInt("type_id"));
        post.setTitle(resultSet.getString("title"));
//        post.setPostDate(resultSet.getDate("post_date"));
//        //Post.setLastName(resultSet.getString("last_name"));
        if (resultSet.getDate("post_date") != null) {
            post.setPostDate(resultSet.getDate("post_date").toLocalDate());
        }
        post.setTextBody(resultSet.getString("text_body"));
        post.setImageLink(resultSet.getString("image_link"));
        return post;
    }
}
