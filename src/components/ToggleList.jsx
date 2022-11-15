import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ToggleList.css";

const CollapseItem = ({ cate }) => {
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className="collapse__item" key={cate.id}>
      <div className="collapse__item__parent" role="presentation" onClick={handleToggle}>
        {cate.category}
      </div>
      <ul className={`collapse__childwrapper ${clicked ? "open" : ""}`}>{cate.rules && cate.rules.map((rule) => <li className="answer">{rule.rulename}</li>)}</ul>
    </li>
  );
};

const ToggleList = () => {
  const [sidenav, setSidenav] = useState([]);

  useEffect(() => {
    const fetchSideNav = async () => {
      // const response = await axios({
      //   method: "GET",
      //   url: "http://localhost:8081/sidenav",
      // });
      setSidenav(sidenavdata);
    };
    fetchSideNav();
  }, []);

  const sidenavdata = [
    {
      id: 1,
      category: "지침 및 내규",
      department: "전략기획본부",
      rules: [
        {
          id: 1001,
          rulename: "선박에너지효율관리계획서",
        },
        {
          id: 1002,
          rulename: "선박엔진운영관리계획서",
        },
        {
          id: 1003,
          rulename: "선박정박운영관리계획서",
        },
        {
          id: 1004,
          rulename: "선박거주구운영관리계획서",
        },
      ],
    },
    {
      id: 2,
      category: "기획",
      department: "전략기획본부",
      rules: [
        {
          id: 2001,
          rulename: "선박계약관리계획서",
        },
        {
          id: 2002,
          rulename: "출판부 규정 세칙",
        },
        {
          id: 2003,
          rulename: "사원 자원봉사 운영규정",
        },
        {
          id: 2004,
          rulename: "사원스타트업지원센터 운영 시행세칙",
        },
        {
          id: 2005,
          rulename: "사원스타트업지원센터 운영 시행세칙",
        },
      ],
    },
    {
      id: 3,
      category: "인사",
      department: "인사부",
      rules: [
        {
          id: 3001,
          rulename: "사원 휴가 계획서 작성 규칙",
        },
        {
          id: 3002,
          rulename: "출판부 규정 세칙",
        },
        {
          id: 3003,
          rulename: "사원 자원봉사 운영규정",
        },
        {
          id: 3004,
          rulename: "사원스타트업지원센터 운영 시행세칙",
        },
        {
          id: 3005,
          rulename: "사원스타트업지원센터 운영 시행세칙",
        },
        {
          id: 3006,
          rulename: "법령 형식에 따른 제명 구분",
        },
      ],
    },
    {
      id: 4,
      category: "일반",
      department: "일반",
      rules: [
        {
          id: 4001,
          rulename: "사원 휴가 계획서 작성 규칙",
        },
        {
          id: 4002,
          rulename: "출판부 규정 세칙",
        },
        {
          id: 4003,
          rulename: "사원 자원봉사 운영규정",
        },
        {
          id: 4004,
          rulename: "사원스타트업지원센터 운영 시행세칙",
        },
        {
          id: 4005,
          rulename: "사원스타트업지원센터 운영 시행세칙",
        },
        {
          id: 4006,
          rulename: "법령 형식에 따른 제명 구분",
        },
      ],
    },
  ];

  return (
    <div className="toggleList">
      <div className="sidenav__collapse">
        <ul className="sidenav__collapse__wrapper">{sidenav && sidenav.map((cate) => <CollapseItem key={cate.id} cate={cate} />)}</ul>
      </div>
    </div>
  );
};

export default ToggleList;
