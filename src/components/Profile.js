import React from "react";
import "./Profile.css";

export default function Profile({ context }) {
  return (
    <div className="profile-section">
      <div className="profile-ellipse-shape"></div>
      <div className="container">
        <h3 className="profile-title">{context && context.profile_Title}</h3>
        <div className="profile-box">
          <div className="profile-left">
            <h4 className="left-title">
              {context && context.profile_LeftTitle}
            </h4>
            <table className="profile-table">
              <tbody>
                <tr>
                  <td className="table-title">
                    {context && context.profile_left_row_title_1}
                  </td>
                  <td className="table-content">
                    {context && context.profile_left_row_content_1}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">
                    {context && context.profile_left_row_title_2}
                  </td>
                  <td className="table-content">
                    {context && context.profile_left_row_content_2}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">
                    {context && context.profile_left_row_title_3}
                  </td>
                  <td className="table-content">
                    {context && context.profile_left_row_content_3}
                  </td>
                </tr>
                <tr>
                  <td className="table-title">
                    {context && context.profile_left_row_title_4}
                  </td>
                  <td className="table-content">
                    {context && context.profile_left_row_content_4}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="profile-right">
            <h4 className="right-title">
              {context && context.profile_right_title}
              <div className="title-shadow"></div>
            </h4>
            <p className="right-p">{context && context.profile_right_p1}</p>
            <p className="right-p">{context && context.profile_right_p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
