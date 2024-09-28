import './App.css';

function App({ user, count }) {
  return (
    <div>
      <h1>Hello, {user}!</h1>
      <p>{count}번째 방문입니다.</p>
    </div>
  );
}


export default App;
