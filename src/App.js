// import logo from './logo.svg';
import './App.css';
import PostList from '../src/components/features/posts/PostList'
import AddPostForm from '../src/components/features/posts/AddPostForm'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
