import Link from "next/link";

const BackButton = props => {
  return (
    <Link href={props.href}>
      <img className="backbutton" src="/images/Vector.png"></img>
    </Link>
  );
};

export default BackButton;
