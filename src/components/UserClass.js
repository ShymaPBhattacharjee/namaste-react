import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state ={
    //     count: 0,
    // }
    console.log(this.props.name + "Child Constructor called");

    this.state = {
      userInfo: {
        name: "dummy name",
        avatar_url: "",
      },
    };
  }

  // async componentDidMount() {
  //     console.log(this.props.name +"Child component did mount called");

  //     //API call

  //     const data = await fetch(
  //         "https://api.github.com/users/ShymaPBhattacharjee"
  //       );
  //       const json = await data.json();
  //       console.log(json);
  //       this.setState({
  //         userInfo: json,
  //       });
  // }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste react componentUnmount part");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
    // if( this.state.count === prevState.count ) {
    //     // code
    // }

    // if(this.state.count2 === prevState.count2) {
    //     // code

    // }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount called");
  }

  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;
    console.log(this.props.name + "Child render called");

    const { login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
                <button onClick={() => {
                    // Never update state variables directly
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Increase Counter</button> */}
        <h2>Name: {login}</h2>
        {/* <h3>Location: {location}</h3> */}
        <img src={avatar_url} />
        <h3>Contact: {"bhattacharjeeshyam17@gmail.com"}</h3>
      </div>
    );
  }
}

export default UserClass;
