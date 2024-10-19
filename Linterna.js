cfg.Portrait;
act="";
//Called when application is started.
function OnStart()
{
 status = 0;
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
	lay.SetBackColor( "#000000" );
	cam = app.CreateCameraView(0.002,0.002);
    cam.SetOnReady(()=>{cam.StartPreview();});
sns1 = app.CreateSensor("Light");
    sns1.SetOnChange(()=>{/*alert("Change");*/});
    sns1.Start();
    
    sns2 = app.CreateSensor("Proximity");
    sns2.SetOnChange(()=>{/*alert("Checks");*/});
    sns2.Start();
	//Create a text label and add it to layout.
	img = app.CreateImage("Img/off.png", 0.75, -1);
	img.SetOnTouchUp( (event)=>{
//	if(event.action==act) return;
	//alert(event.count);
	//alert(event.action);
	//alert(event.x);
		//alert(event.y.y3);
	if(event.action="Up"){
     	if(status==0){status=1;cam.SetFlash(true);img.SetImage("Img/on.png");app.Vibrate( "0,100,30,100,50,300" );lay.SetBackColor( "#ffffff" ); }else{status=0;cam.SetFlash( false );img.SetImage( "Img/off.png");app.Vibrate( "0,100,300,50,150,300" );lay.SetBackColor( "#000000" );}
	}
	//act = event.action;
	});
	
	lay.AddChild( img)
	cam.SetFlash(true);
	//Add layout to app.	
	lay.AddChild( cam )
	app.AddLayout( lay )
}