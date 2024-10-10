import { GithubReposType } from "@/app/types/GithubReposType";
import styles from "./styles.module.scss";

interface Iprops {
    repo: GithubReposType
}
export default function RepositoryCard({ repo }: Iprops) {
    return (
        <div className={styles.container}>
            <h3>{repo.name}</h3>
            <p>
                {repo.description}
            </p>
        </div>
    );
}