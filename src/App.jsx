import { useState } from "react"; //useState는 reactlibrary에 있는 기능이라 들고와야함!

function App() {
  const inintialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [arr, setArray] = useState(inintialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForeEach = () => {
    let temp = "";
    arr.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = arr.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = arr.map((item, index) => item.toUpperCase());
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reducede = arr.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reducede);
  };

  const handlepush = function () {
    if (query.length <= 0) {
      alert("추가하려는 값을 입력해 주세요.");
      return false;
    }
    const newArr = [...arr, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    if (arr <= 0) {
      alert("없앨 값이 없어요.");
      return false;
    } else {
      arr.pop();
    }
    const popedArr = [...arr];
    setArray(popedArr);
    setResult(popedArr.join(", "));
  };

  function handleSlice() {
    const slicedArr = arr.slice(1, 4);
    setResult(slicedArr.join(", "));
  }

  function handleSplice() {
    arr.splice(2, 3, "kiwi", "lime", "melon");
    setResult(arr.join(", "));
  }

  const handleIndexOf = () => setResult(arr.indexOf(query));

  function handleIncludes() {
    setResult(String(arr.includes(query)));
  }

  function handleFind() {
    let findedArr = arr.find(function (a) {
      return a.includes(query);
    });
    setResult(findedArr);
  }

  function handleSome() {
    const somedArr = arr.some(function (a) {
      return a.includes(query);
    });
    setResult(String(somedArr));
  }

  function handleEvery() {
    //배열 내 단어의 길이가 query보다 긴가?
    const everyArr = arr.every(function (a) {
      if (isNaN(Number(query))) {
        return alert("숫자를 입력해 주세요.");
      } else if (query < 2) {
        return false;
      } else {
        return a.length > query;
      }
    });
    setResult(String(everyArr));
  }

  function handleSort() {
    const sortedArr = arr.sort(function (a, b) {
      return a > b ? 1 : -1;
    });
    setResult(sortedArr.join(", "));
  }

  const handleJoin = () => setResult(arr.join(query));

  return (
    <div
      style={{
        backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />
      <div>
        <button onClick={handleForeEach}> forEach</button>
        <button onClick={handleFilter}> filter</button>
        <button onClick={handleMap}> map</button>
        <button onClick={handleReduce}> ruduce</button>
        <button onClick={handlepush}> push</button>
        <button onClick={handlePop}> pop</button>
        <button onClick={handleSlice}> slice</button>
        <button onClick={handleSplice}> splice</button>
        <button onClick={handleIndexOf}> indexOf</button>
        <button onClick={handleIncludes}> includes</button>
        <button onClick={handleFind}> find</button>
        <button onClick={handleSome}> some</button>
        <button onClick={handleEvery}> every</button>
        <button onClick={handleSort}> sort</button>
        <button onClick={handleJoin}> join</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{arr.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
