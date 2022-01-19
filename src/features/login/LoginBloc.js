export const LoginBloc = (repo, navigation, useLogin) => {
    const {userAuthentication} = repo();
    const {navigateTo} = navigation();
    const {
        error,
        handleErrorChange
    } = useLogin()

    const onAuthenticate = async (userName, password) => {
        const resp = await userAuthentication(userName, password);
        if (resp) {
            navigateTo(`/counter`)
        } else {
            handleErrorChange("Unauthorized");
        }
    }
    return {
        onAuthenticate,
        error
    };
};
