import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";

const create = () => {
  return (
    <>
      <Header title={"For You"} />
      <Center flex={1}>
        <Heading>For You</Heading>
      </Center>
    </>
  );
};

export default create;