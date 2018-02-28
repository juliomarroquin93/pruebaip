import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';



const responseFacebook = (response) => {
  console.log(response);
  var user = response.last_name;
  alert(user);
}

ReactDOM.render(

  <FacebookLogin
    appId="143236879683898"
    autoLoad={false}
    fields="first_name,last_name,email,gender,birthday"
    scope="public_profile, email,user_birthday"
    callback={responseFacebook}
    cssClass="kep-login-facebook"
    icon="fa-facebook"
    textButton="login"
  />,

  document.getElementById('root')
);

/*function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'},
  {id: 3, title: 'Installationsss', content: 'You can install React from npmsad.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);*/
