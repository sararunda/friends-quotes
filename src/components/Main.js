const Main = (props) => {
  return (
    <main className="main">
      <ul characters={props.characters}>{props.renderList()}</ul>
    </main>
  );
};
export default Main;
