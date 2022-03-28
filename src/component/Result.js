export default function Result(props) {
    console.log(props);
    const comment = props.location.data.comment;
    const email = props.location.data.emailId;
    return(
      <section id="entry-page">
        <div className="result">
      <h1>Thank you {email}</h1>
      <p>We appreciate your comment : {comment}</p>
        </div>
        </section>
      );
  }