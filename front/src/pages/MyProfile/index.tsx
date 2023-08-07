import { StyledCard } from "../../components/ProductList/Card/style";
import { IClient } from "../../providers/@types";

export const MyProfile = () => {
    const profileStr = localStorage.getItem("@CLIENT");
    if (profileStr !== null) {
        const profile: IClient = JSON.parse(profileStr);

        return (
            <StyledCard key={profile.id}>
                <div className="imageBox">
                    {/* <img src={user} alt="imagem do Usuario" /> */}
                </div>
                <div className="content">
                    <h3>{profile.name}</h3>
                    <h3>Email:{profile.email}</h3>
                    <h3>Tel:{profile.telefone}</h3>
                    <h3>
                        Data de Cadastro:
                        {profile.registrationDate}
                    </h3>
                    <h3>
                        Ultima Atualização:
                        {profile.updatedAt}
                    </h3>
                    <button>Atualizar Dados</button>
                </div>
            </StyledCard>
        );
    }
};
