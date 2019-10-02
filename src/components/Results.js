import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Helmet from "react-helmet";

class Results extends Component {
  constructor() {
    super();
    this.state = {
      previousresults: [],
      error: ""
    };
  }

  componentDidMount() {
    this.getResults();
    this.setState({error: "Loading..."});
  }

  getResults = () => {
    console.log("got results");
    axios
      .post("/api/results/getresults", {
        user_id: this.props.auth.user.id
      })
      .then(res => {
        this.setState({ previousresults: res.data });
        this.setState({ error: "" });
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.setState({ error: "No Saved Results Found" });
          this.setState({ previousresults: [] });
        } else {
          console.log(err);
        }
      });
  };

  deleteResult = (id) => {
    this.setState({error: "Loading..."})
    axios.post("/api/results/deleteresult", {
      _id: id
    }).then(this.getResults()).catch(err => {if(err.response.status === 404){
      this.getResults();
    } else {
      console.log(err);
    }})
  };

  render() {
    return (
    <div className="page-container">
        <Helmet>
          <title>Knot Spot - Results</title>
        </Helmet>
      <div className="container">
        <div className="resultsdisplay">
        {this.state.error}
          {this.state.previousresults.map((result, index) => {
            return (
              <div key={index}>
                <table className="resultstable savedresults">
                  <tr>
                    <th>
                      {result.firstbone} - {moment(result.createdAt).format("DD/MM/YYYY")}{" "}
                      <button
                        className="delete"
                        onClick={() => this.deleteResult(result._id)}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                  {result.results.map((muscle, key) => {
                    return (
                      <tr>
                        <td>
                          <b>
                            {key + 1}. {muscle[0]}{" "}
                            <Link
                              to={`/information/${muscle[0]}`}
                              className="infobutton"
                            >
                              ⓘ
                            </Link>
                          </b>
                        </td>
                      </tr>
                    );
                  })}
                </table>
                <br />
              </div>
            );
          })}
        </div>
        <Link to="/profile" className="retakebutton">
          Back
        </Link>
      </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
    auth: state.auth
  });

  export default connect(
    mapStateToProps
  )(Results);