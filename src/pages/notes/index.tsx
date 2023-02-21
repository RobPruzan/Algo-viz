import NoteArea from "~/components/NoteArea";

// type Props = {}

const index = () => {
  return (
    <div>
      <NoteArea tiny_mce_api_key={process.env.TINY_MCE_KEY} />
    </div>
  );
};

export default index;
