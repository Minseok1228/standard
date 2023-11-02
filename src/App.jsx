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
      console.log(temp);
      console.log("-----------------------------");
    });
    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = arr.filter((item, index) => item.includes(query));
    // if (item.includes(query)) {
    //   return true;
    // } else {
    //   return false;
    // } = item.includes(query)
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = arr.map((item, index) => item.toUpperCase());
    // {
    //   return item.toUpperCase();
    // });
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reducede = arr.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reducede);
  };

  const handlepush = function () {
    //왜  arr.push에서 값이 갱신되지 않는가! 데이터 불변성x
    //state의 변경이 전달되지않아 리액트가 이해를 못함?
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
    console.log("query : ", query);
    console.log("spread : ", ...query); //query는 13인데 왜 스프레드하니 1 3 이 된 것 인가?
    //
    console.log("[spread] : ", [...query]);
    console.log("...[spread] : ", ...[...query]);
    const knife = [...[...query]];
    console.log("knife : ", knife);
    const [a, b, c] = knife;
    console.log(typeof a);
    console.log(Number(a));
    console.log(typeof b);
    console.log(typeof c);
    console.log(Number(c));

    console.log(Number(a), Number(c));
    console.log(Number(a), Number(b));
    console.log(Number(a), b, Number(c)); //slice(1,4)에서 ,는 string이 아닌 , 뭐라고 지칭해야하나..? 함수호출시 인자구분 구분연산자?
    console.log(Number(query));
    const slicedArr = arr.slice(Number(a), Number(b));

    // const slicedArr = arr.slice(Number(a), Number(b));
    console.log(slicedArr);
    setResult(slicedArr.join(", "));
  }

  function handleSplice() {
    // if (isNaN(Number(query))) {
    //   alert("1의 자리 숫자 두 가지를 입력해 주세요.");
    // } else if (query.length > 2) {
    //   // alert("1의 자리 숫자 두 가지를 입력해 주세요.");
    // }
    // const arrSplice = [...query];
    // const [a, b] = arrSplice;
    // const splicedArr = arr.splice(a, b);
    arr.splice(2, 3, "kiwi", "lime", "melon");

    setResult(arr.join(", "));
  }

  const handleIndexOf = () => setResult(arr.indexOf(query));

  function handleIncludes() {
    //정확한 값이있나
    setResult(String(arr.includes(query)));
  }

  //some이랑 find 차이는 string을보여주나 boolean을 보여주나?
  function handleFind() {
    //Not Found를 어떠헥 구현할까?

    let findedArr = arr.find(function (a) {
      console.log("find 내부 : ", a.includes(query));
      console.log("--------------------------------------------");
      return a.includes(query);
    });
    console.log("findedArr : ", findedArr);
    if (findedArr === undefined) {
      return (findedArr = "Not Found");
    }

    console.log("finded : ", findedArr);
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
      console.log(Number(query));
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
        //style에 {{}} 두번하는 이유!=> 객체니까~ jsx의{{객체}}
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
