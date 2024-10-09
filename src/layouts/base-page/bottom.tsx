type Props = {
  rightNode: React.ReactNode;
}

const BottomPart = (props: Props) => {
  return (
    <div className="flex items-center justify-end">
      {props.rightNode}
    </div>

  );
};

export default BottomPart;
