type Comment = {
    _id: string
    name: string
    message: string
    submittedAt: string
  }
  
  type Props = {
    comments: Comment[]
  }
  
  export default function CommentList({ comments }: Props) {
    if (!comments || comments.length === 0) {
      return <p className="text-gray-500">Aucun commentaire pour le moment.</p>
    }
  
    return (
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment._id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow">
            <p className="font-semibold text-sm text-primary">{comment.name}</p>
            <p className="text-gray-700 dark:text-gray-200 text-sm mt-1 whitespace-pre-line">
              {comment.message}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(comment.submittedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    )
  }
  