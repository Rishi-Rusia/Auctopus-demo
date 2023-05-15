import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchData } from "./state/reducers/dataSlice";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AddPost from "./components/AddPost";

function App() {
  // const data = useSelector((state) => state.fetchPost);

  // const callfunc = async () => {
  //   data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   // console.log(data.data);
  //   data.data.forEach((element) => {
  //     console.log(element.title);
  //     console.log(element.body);
  //   });
  // };

  // useEffect(() => {
  //   callfunc();
  //   //eslint-disable-next-line
  // }, []);

  const dispatch = useDispatch();
  // const { loading, data, error }

  const filterpost = useSelector((state) => {
    console.log(state.data.filterpost);
    return state.data.filterpost;
  });

  useEffect(() => {
    const x = dispatch(fetchData());
    console.log("THIS IS INSIDE USEEFFECT" + x);
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar></Navbar>

      <div style={{ "margin-top": "60px" }}>
        <AddPost></AddPost>

        <div className="row">
          {filterpost &&
            filterpost.map((item, index) => (
              <div className="col">
                <div key={item.id}>
                  <Card
                    image="https://picsum.photos/200"
                    title={item.title}
                    body={item.body}
                    key={index}
                  ></Card>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
