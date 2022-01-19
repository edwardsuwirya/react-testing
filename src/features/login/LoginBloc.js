export const LoginBloc = (repo, navigation, useLogin) => {
    const {userAuthentication} = repo();
    const {navigateTo} = navigation();
    const {
        userName,
        handleUserNameChange,
        password,
        handlePasswordChange,
        error,
        handleErrorChange
    } = useLogin()

    const onAuthenticate = async () => {
        if (!userName || !password) {
            handleErrorChange("All field is required");
        } else {
            const resp = await userAuthentication(userName, password);
            if (resp) {
                navigateTo(`/counter`)
            }
        }
    }
    return {
        userName,
        password,
        handleUserNameChange,
        handlePasswordChange,
        onAuthenticate,
        error
    };
};
