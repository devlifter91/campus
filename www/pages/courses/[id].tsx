import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_COURSE = gql`
  query GET_COURSE($where: CourseWhereUniqueInput!) {
    findOneCourse(where: $where) {
      id
      name
      title
    }
  }
`;

export default function Course() {
  const router = useRouter();
  const { loading, data } = useQuery(GET_COURSE, {
    variables: {
      where: {
        id: router.query.id
      }
    }
  });

  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div>
      <h1>{data.findOneCourse.name}</h1>
      <p>This is the course content.</p>
    </div>
  );
}