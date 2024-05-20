// auth.ts
export const MANAGE_ID = "test@codeit.com";
export const MANAGE_PW = "sprint101";

export const checkEmailValidity = (email: string): string => {
    if (email === '') {
        return '이메일을 입력해주세요.';
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
        return "올바른 이메일 주소가 아닙니다.";
    }
    return '';
};

export const checkPasswordValidity = (password: string): string => {
    if (password === '') {
        return '비밀번호를 입력해주세요.';
    }
    return '';
};

export const checkCredentials = (email: string, password: string): string => {
    if (email !== MANAGE_ID) {
        return '이메일을 확인해주세요.';
    }
    if (password !== MANAGE_PW) {
        return '비밀번호를 확인해주세요.';
    }
    return '';
};

export const signinPost = async (url: string, values: { email: string; password: string }) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            const data = await response.json();
            if (data && data.data.accessToken) {
                localStorage.setItem('accessToken', data.data.accessToken);
                window.location.href = "folder.html";
            } else {
                throw new Error('accessToken이 응답에 없습니다.');
            }
        } else {
            throw new Error(`Fetch 요청이 실패하였습니다. HTTP 상태 코드: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Fetch 요청 처리 중 에러가 발생하였습니다: ${error}`);
    }
};
