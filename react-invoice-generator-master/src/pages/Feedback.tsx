export default function Feedback() {
  return (
    <div className="center">
      <h1>Feedback</h1>
      <textarea placeholder="Your feedback..." rows={5}></textarea><br />
      <button>Submit</button>
    </div>
  );
}