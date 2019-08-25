import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Link from "next/link";

const GET_COURSES = gql`
  query getCourses {
    findManyCourse {
      id
      name
      title
      class_number
      createdAt
      updatedAt
    }
  }
`;

export default function CourseList() {
  const { loading, data, error } = useQuery(GET_COURSES);

  if (error) return <div>Error...</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.findManyCourse.map(course => (
        <div key={course.id} className="course">
          <Link href="/courses/[id]" as={`/courses/${course.id}`}>
            <a className="course-name">
              {course.name} {course.class_number}
            </a>
          </Link>
        </div>
      ))}

      <style jsx>
        {`
          .page-title {
            margin-bottom: 28px;
          }
          .course {
            margin-bottom: 28px;
            background: #fff;
            border-radius: 5px;
            cursor: pointer;
          }
          .course:hover {
            border: 1px solid blue;
          }
          .course-name {
            padding: 20px;
            display: block;
            color: #000;
            font-weight: bold;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}