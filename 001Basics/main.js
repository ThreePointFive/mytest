function st() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/2q.jpg\"/>"
    var tem=computerC();
    jSJG("st",tem);
}
function jd() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/3q.jpg\"/>"
    var tem=computerC();
    jSJG("jd",tem);
}
function bb() {
    document.getElementById("myChoice").innerHTML="<img src=\"images/4q.jpg\"/>"
    var tem=computerC();
    jSJG("bb",tem);
}
function computerC() {
    var a=3*Math.random();
    if(a<1)
    {
        document.getElementById("computerChoice").innerHTML="<img src=\"images/2q.jpg\"/>"
        return "st";
    }
    else if (a<2)
    {
        document.getElementById("computerChoice").innerHTML="<img src=\"images/3q.jpg\"/>"
        return "jd";
    }
    else
    {
        document.getElementById("computerChoice").innerHTML="<img src=\"images/4q.jpg\"/>"
        return "bb";
    }
}
function jSJG(my,computer) {
    if(my=="st")
    {
        if (computer=="st")
        {
            document.getElementById("jg").innerHTML="平局"
        }
        else if (computer=="jd")
        {
            document.getElementById("jg").innerHTML="赢了"
        }
        else
        {
            document.getElementById("jg").innerHTML="输了"
        }
    }
    else if (my=="jd")
    {
        if (computer=="st")
        {
            document.getElementById("jg").innerHTML="输了"
        }
        else if (computer=="jd")
        {
            document.getElementById("jg").innerHTML="平局"
        }
        else
        {
            document.getElementById("jg").innerHTML="赢了"
        }
    }
    else
    {
        if (computer=="st")
        {
            document.getElementById("jg").innerHTML="赢了"
        }
        else if (computer=="jd")
        {
            document.getElementById("jg").innerHTML="输了"
        }
        else
        {
            document.getElementById("jg").innerHTML="平局"
        }
    }
}/**
 * Created by Administrator on 2020/12/10 0010.
 */
