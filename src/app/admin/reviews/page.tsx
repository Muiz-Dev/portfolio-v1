import { pool } from "@/lib/db";
import { approveReview, rejectReview, deleteReview, toggleFeatured } from "./actions";

export default async function AdminReviewsPage() {
  let reviews: any[] = [];
  try {
    const result = await pool.query("SELECT * FROM reviews ORDER BY created_at DESC");
    reviews = result.rows;
  } catch (error) {
    console.error("Failed to load reviews:", error);
    return <div>Database connection error.</div>;
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "24px" }}>Manage Reviews</h1>
      
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {reviews.map((review) => (
            <div key={review.id} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", background: review.status === "approved" ? "#f4fff4" : review.status === "rejected" ? "#fff4f4" : "#f9f9f9" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ margin: "0 0 4px" }}>{review.client_name} - {review.rating}/5 Stars</h3>
                  <p style={{ margin: "0 0 4px", fontSize: "14px", color: "#666" }}>
                    {review.role ? `${review.role}, ` : ""}{review.business} · {review.service}
                  </p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
                    Status: <strong style={{ color: review.status === "approved" ? "green" : review.status === "rejected" ? "red" : "orange" }}>{review.status.toUpperCase()}</strong> 
                    {" | "}Featured: <strong>{review.featured ? "Yes" : "No"}</strong>
                    {" | "}Permission to share: <strong>{review.permission ? "Yes" : "No"}</strong>
                  </p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <form action={approveReview.bind(null, review.id)}>
                    <button type="submit" disabled={review.status === "approved"} style={{ padding: "6px 12px", background: "green", color: "white", border: "none", borderRadius: "4px", cursor: review.status === "approved" ? "not-allowed" : "pointer", opacity: review.status === "approved" ? 0.5 : 1 }}>Approve</button>
                  </form>
                  <form action={rejectReview.bind(null, review.id)}>
                    <button type="submit" disabled={review.status === "rejected"} style={{ padding: "6px 12px", background: "orange", color: "white", border: "none", borderRadius: "4px", cursor: review.status === "rejected" ? "not-allowed" : "pointer", opacity: review.status === "rejected" ? 0.5 : 1 }}>Reject</button>
                  </form>
                  <form action={toggleFeatured.bind(null, review.id, review.featured)}>
                    <button type="submit" style={{ padding: "6px 12px", background: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>{review.featured ? "Unfeature" : "Feature"}</button>
                  </form>
                  <form action={deleteReview.bind(null, review.id)}>
                    <button type="submit" style={{ padding: "6px 12px", background: "red", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Delete</button>
                  </form>
                </div>
              </div>
              <blockquote style={{ margin: 0, fontStyle: "italic", paddingLeft: "12px", borderLeft: "4px solid #ccc", color: "#444" }}>
                "{review.feedback}"
              </blockquote>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
