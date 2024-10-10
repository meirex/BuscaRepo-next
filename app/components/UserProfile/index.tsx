import Image from "next/image"
import styles from "./styles.module.scss"
import { GithubProfileType } from "@/app/types/GithubProfileType"

interface IProps {
    isMyProfile?: boolean
    profile: GithubProfileType
}

export default function UserProfile({ isMyProfile, profile }: IProps) {

    return (
        <div className={styles.container}>
            <div className={styles["container--avatar"]}>
                <Image src={profile.avatar_url} alt="avatar" width={249} height={249} />
                {isMyProfile && <div>Meu perfil</div>}

            </div>

            <h1>{profile.name}</h1>
            <span>{profile.login}</span>
            <p>{profile.bio}</p>


            <div className={styles.itemsContainer}>
                <span>{profile.company}</span>
                <span>{profile.location}</span>
                <span>{profile.email}</span>
                <span>{profile.blog}</span>

            </div>



        </div >
    );
}