import { RepositoriesContainer } from "../styles/Repositories";

import Star from "../assets/star.svg";
import Image from "next/image";
import { format } from "date-fns";

interface RepositoriesProps {
  name: string;
  url: string;
  created_at: string;
  stargazers_count: number;
}

export function Repositories({
  name,
  created_at,
  url,
  stargazers_count,
}: RepositoriesProps) {
  const date = new Date(created_at);
  const formattedDate = format(date, "dd/MM/yyyy");
  return (
    <RepositoriesContainer>
      <h2>{name}</h2>
      <p>URL: {url}</p>
      <p>{formattedDate}</p>

      <div className="counter">
        <Image src={Star} alt="" />
        {stargazers_count}
      </div>
    </RepositoriesContainer>
  );
}
