function FeedbackCard({ element }) {
  const { fullname, email, message, createdAt } = element;

  const publishedAt = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-cyan-100 border-l-4 border-cyan-500 p-4 shadow hover:shadow-md transition-shadow duration-300 rounded-lg">
      <div className="flex gap-2 items-center">
        <h3 className="text-lg font-bold text-gray-800">{fullname}</h3>
        <p className="text-sm text-gray-500 italic">{email}</p>
      </div>
      <p className="text-xs">{publishedAt}</p>

      <p className="text-gray-700 text-sm">{message}</p>
    </div>
  );
}

export default FeedbackCard;
