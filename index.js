function getAgeAverage(personArray) {
	var average = 0;

	// 연령 평균을 구해주는 함수를 만들어 봅시다.
	// 평균은 총합을 갯수로 나눠주면 됩니다.
    var sum = 0;

    for (var i = 0; i < personArray.length; i++) {
        sum = sum + personArray[i]["age"];
    }

    average = sum / personArray.length;

        

	return average;
}

var personArray = [
										{"name": "John Doe", "age": 20},
										{"name": "Jane Doe", "age": 19},
										{"name": "Fred Doe", "age": 32},
										{"name": "Chris Doe", "age": 45},
										{"name": "Layla Doe", "age": 37},
									];

console.log(getAgeAverage(personArray)); // 30.6 <-정답

// 스펠링 조심하기!!!!