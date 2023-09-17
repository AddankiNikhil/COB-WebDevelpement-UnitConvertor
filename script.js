//alert("linked");

function meter_func(val,to)
{   var res=0;
  switch(to)
  {
    case "meter"://alert("meter");
                 res=val;
                 break;
    case "centi"://alert("cm");
                res=val*100;    
                break;
    case "km"://alert("kms");
            res=val/1000;     
                break;
    case "miles"://alert("mi");
                    res=val*0.00062137;
                    break;
    case "foots"://alert("f");
                    res=val*3.28;
                    break;
    
  }
  return res;
}
function centi_func(val,to="")
{
    var res=0;
    switch(to)
    {
      case "meter"://alert("meter");
                   res=val/100;
                   break;
      case "centi"://alert("cm");
                  res=val;    
                  break;
      case "km"://alert("kms");
              res=val/100000;     
                  break;
      case "miles"://alert("mi");
                      res=val/160900;
                      break;
      case "foots"://alert("f");
                      res=val/30.48;
                      break;
      
    }
    return res;}

function km_func(val,to)
{
    var res=0;
    switch(to)
    {
      case "meter"://alert("meter");
                   res=val*1000;
                   break;
      case "centi"://alert("cm");
                  res=val*100000;    
                  break;
      case "km"://alert("kms");
              res=val;     
                  break;
      case "miles"://alert("mi");
                      res=val/1.609;
                      break;
      case "foots"://alert("f");
                      res=val*3281;
                      break;
      
    }
    return res;}

function miles_func(val,to)
{
    var res=0;
    switch(to)
    {
      case "meter"://alert("meter");
                   res=val*1609;
                   break;
      case "centi"://alert("cm");
                  res=val*160900;    
                  break;
      case "km"://alert("kms");
              res=val*1.609;     
                  break;
      case "miles"://alert("mi");
                      res=val;
                      break;
      case "foots"://alert("f");
                      res=val*5280;
                      break;
      
    }
    return res;}

function foot_func(val,to)
{
    var res=0;
    switch(to)
    {
      case "meter"://alert("meter");
                   res=val/3.281;
                   break;
      case "centi"://alert("cm");
                  res=val*30.48;    
                  break;
      case "km"://alert("kms");
              res=val/3281;     
                  break;
      case "miles"://alert("mi");
                      res=val/5280;
                      break;
      case "foots"://alert("f");
                      res=val;
                      break;
      
    }
    return res;
}

convert=()=>{
    var from_sys=document.getElementById("from-first");
    var to_sys=document.getElementById("to-second");
    
    var from=from_sys[from_sys.selectedIndex].value;
    var to=to_sys[to_sys.selectedIndex].value;
    var val=document.getElementById("input-element1").value;
//console.log(from,to);
//console.log(val);

switch(from){
    case "meter"://alert("meter");
                 res=meter_func(val,to);
                 break;
    case "centi"://alert("cm");
                res=centi_func(val,to);    
                break;
    case "km"://alert("kms");
            res=km_func(val,to);     
                break;
    case "miles"://alert("mi");
                    res=miles_func(val,to);
                    break;
    case "foots"://alert("f");
                    res=foot_func(val,to);
                    break;
                    
}
document.getElementById("input-element2").value=res;
}
function change_systems(){
    var from_sys=document.getElementById("from-first");
    var to_sys=document.getElementById("to-second");
    var temp=from_sys.selectedIndex
    from_sys.selectedIndex=to_sys.selectedIndex;
    to_sys.selectedIndex=temp;
    convert();
}