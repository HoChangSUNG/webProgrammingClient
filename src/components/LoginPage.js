const LoginPage = () => {


  return (
    <div className="login-page-container">
      <div className="login-page-content">
        <form id="login-form" method="post" action="#">
            
          <div className="login_fieldset_div">
          <div className="fieldset-title">로그인</div>
            <div className="login">
              <input
                type="text"
                title="아이디"
                id="txtUserId"
                name="txtUserId"
                data-title="아이디를 "
                data-message="입력하세요."
                
              ></input>
              <input
                type="password"
                title="패스워드"
                id="txtPassword"
                name="txtPassword"
                data-title="패스워드를 "
                data-message="입력하세요."
                
              ></input>
            </div>

            <button type="submit" id="submit-login" title="로그인">
              <span>로그인</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
