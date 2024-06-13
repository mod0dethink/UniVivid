import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/UnivividStyle.css';

function CreateAccount() {
  const [formData, setFormData] = useState({
    mailaddress: '',
    password: '',
    username: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        type: 'user',
        ...formData,
      }, { withCredentials: true });
      alert(response.data.message);
    } catch (error) {
      alert('ユーザーアカウントの登録に失敗しました');
    }
  };

  return (
    <div className="from-container">
      <section className="margin-section ">
        <div>新規登録</div>
      </section>

      <section className="from-background">
        <div className="from-nav">
          <form onSubmit={handleSubmit}>
            <div>
              <p>メールアドレス</p>
              <input type="email" name="mailaddress" placeholder="aaa" value={formData.mailaddress} onChange={handleChange} />
            </div>

            <div>
              <p>パスワード</p>
              <input type="password" name="password" placeholder="123" value={formData.password} onChange={handleChange} />
            </div>

            <div>
              <p>ユーザ名</p>
              <input type="text" name="username" placeholder="abcd" value={formData.username} onChange={handleChange} />
            </div>

            <div>
              <button type="submit">登録</button>
            </div>
          </form>
        </div>
      </section>

      <section className="margin-section">　　　　　　</section>
    </div>
  )
}

function CreateSchoolAccount() {
  const [formData, setFormData] = useState({
    mailaddress: '',
    password: '',
    username: '',
    univname: '',
    univurl: '',
    donateurl: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        type: 'university',
        ...formData,
      }, { withCredentials: true });
      alert(response.data.message);
    } catch (error) {
      alert('大学アカウントの登録に失敗しました');
    }
  };

  return (
    <div className="from-container">
      <section className="margin-section ">
        <div>新規登録</div>
      </section>

      <section className="from-background">
        <div className="from-nav">
          <form onSubmit={handleSubmit}>
            <div>
              <p>メールアドレス</p>
              <input type="email" name="mailaddress" placeholder="aaa" value={formData.mailaddress} onChange={handleChange} />
            </div>

            <div>
              <p>パスワード</p>
              <input type="password" name="password" placeholder="123" value={formData.password} onChange={handleChange} />
            </div>

            <div>
              <p>ユーザ名</p>
              <input type="text" name="username" placeholder="abcd" value={formData.username} onChange={handleChange} />
            </div>
            <div>
              <p>学校名</p>
              <input type="text" name="univname" placeholder="abcd" value={formData.univname} onChange={handleChange} />
            </div>
            <div>
              <p>大学URL</p>
              <input type="text" name="univurl" placeholder="abcd" value={formData.univurl} onChange={handleChange} />
            </div>
            <div>
              <p>寄付ページURL</p>
              <input type="text" name="donateurl" placeholder="abcd" value={formData.donateurl} onChange={handleChange} />
            </div>

            <div>
              <button type="submit">登録</button>
            </div>
          </form>
        </div>
      </section>

      <section className="margin-section">　　　　　　</section>
    </div>
  )
}

export default CreateAccount
export { CreateSchoolAccount }
