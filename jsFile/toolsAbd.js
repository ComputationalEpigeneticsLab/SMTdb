
innerpath="0_files/innerpath";
Metagenome_subclass_infor="";
$.ajaxSettings.async = false;
$.getJSON(innerpath+"/Metagenome_subclass.txt", "", function(data_re) {
	Metagenome_subclass_infor=data_re;
});

//first select be with xml_bac_m
Metagenome_subclass_xml("xml_bac_detail",Metagenome_subclass_infor,"genus");

toolsDetailShow('GSE206552_GSM6256811','genus','Citrobacter');
var xmSelectBac = xmSelect.render({
	el: '#xml_bac_m',
	direction: 'down',//向上展开
	name: 'xml_bac_m',//表单的name属性
	size: 'big',//选中的之后显示的字的大小
    theme: {color: '#ff9a18',
    	},//主题颜色
    tips: ' Select a key ',
    style: {
		marginLeft: '0px',
		borderRadius: '1px',
		height: '48px',
		//width:'400px',
		border: '1px solid #ced4da',
	},
	radio: true,
	clickClose: true,
	filterable: true,
	data: [
{name: 'Kingdom', value: 'kingdom'},
{name: 'Phylum', value: 'phylum'},
{name: 'Class', value: 'class'},
{name: 'Order', value: 'order'},
{name: 'Family', value: 'family'},
{name: 'Genus', value: 'genus',selected: true},
{name: 'Species', value: 'species'},
	],
	on: function(data){//监听
		//arr:  
		var arr = data.arr;
		var change = data.change;
		//isAdd
		var isAdd = data.isAdd;
		var value0=arr[0]["value"];
		//
		Metagenome_subclass_xml("xml_bac_detail",Metagenome_subclass_infor,value0);
	}
})

function Metagenome_subclass_xml(div,Metagenome_subclass_infor,bac){
	var data_option=Metagenome_subclass_infor[bac].split(",");
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
	var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						style: {
		marginLeft: '0px',
		borderRadius: '1px',
		height: '48px',
		//width:'400px',
		border: '1px solid #ced4da',
	},
						radio: true,
						clickClose: true,
						filterable: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var gene0=arr[0]["value"];
							///
							//gene_spatial_exp(gene0,div_color);
							
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
	// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
}

function toolsBacSearch(){
	
	$("#loading1").show();
	var Metagenome = xmSelect.get('#xml_bac_m', true).getValue('valueStr');
	var bac= xmSelect.get('#xml_bac_detail', true).getValue('valueStr');
	
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		//处理返回的数据，更新当前页面
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
		//alert(returnData);
			//eval 执行括号中的代码或者JSON.parse，把json格式转化为json对象
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				////
				
				document.getElementById("ToolsSearchTable").style.display="block";
				var oldTable = $('#tools_sub_table').dataTable();
				oldTable.fnClearTable(); //清空一下table
				oldTable.fnDestroy(); //还原初始化了的dataTable
				ToolsSubTable("0_files/ToolsBacAbc.txt",Metagenome,bac);
			}else{
				////
				document.getElementById("ToolsSearchTable").style.display="block";
				document.getElementById("ToolsSearchTable").innerHTML="No result";
			}
			$("#loading1").hide();
				}
			}
	var param="Metagenome="+Metagenome+"&bac="+bac+"&toolsType=bacAbc";
	
	xmlHttp.open("get","MysqlTools.jsp?"+param,true);
	xmlHttp.send();
}



function ToolsSubTable(path,Metagenome,bac){
//	var table_inner='<thead ><tr><th>Cancer</th><th>Tissue</th><th>Technology </th><th>Section</th><th>No. of Spot </th><th>No. of Gene</th><th>No. of Marker</th><th>Publication</th><th>Detail</th></tr></thead>';
//	document.getElementById("browse_sub_table").innerHTML=table_inner;
	var path=path;
	$(document).ready(function() {
		$("#tools_sub_table").DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
        "aLengthMenu": [5,10,20],//设置每页显示数据条数的下拉选项
        'iDisplayLength': 5, //每页初始显示5条记录
		"deferRender": true,
		"bProcessing": true, 
		"searching" : false,
		"paginationType": "full_numbers",
		"serverSide": false, 
		"order": [[ 0, 'desc' ]],
		'ajax': path,
		'columns':[
		{'data':'cancer'},
		{'data':null,
							"render": function ( data, type, row, meta ) { 
								var str=row['tissue'];
								return str.length < 5 ?
										str :
										"<span title='" + str + "'>" + str.substr(0, 4) + '&#8230;</span>';
							}},
		{'data':null,"render": function ( data, type, row, meta ) { return Metagenome ;}},
		{'data':null,"render": function ( data, type, row, meta ) { return bac ;}},
		{'data':'spot_num'},
		{'data':'marker_gene_num'},
		//{'data':'cell_num'},
		{'data':'celltype_num'},
		{'data':null,
    		"render": function ( data, type, row, meta ) {  
			var publication=row['publication'];
			if(publication.length > 5){
				publication="<span title='" + publication + "'>" + publication.substr(0, 4) + '&#8230;</span>';
			}
    		return  "<a   target='_blank' href='"+row['paper_http']+"'> <i class='fa-solid fa-link' style='font-size:16px;color:#ff9a18' aria-hidden='true'   ></i> "+publication+"</a> ";
    		}
    		},
		{'data':null,
		"render": function ( data, type, row, meta ) {  
		//console.log("<button class='btn btn-danger botton-submit' onclick="+'"'+"toolsDetailShow('"+row['dataset_id']+"')"+'"'+">" +"<i class='fa fa-share' aria-hidden='true' style='font-size:15px;'></i></button>");
		return "<button class='btn btn-danger botton-submit' style='height:35px;' onclick="+'"'+"toolsDetailShow('"+row['dataset_id']+"','"+Metagenome+"','"+bac+"'"+")"+'"'+">" +"<i class='fa fa-share' aria-hidden='true' style='font-size:15px;'></i></button>";  
						                    }
		}
		]
		} );  
		} );
}



function toolsDetailShow(datasetID,Metagenome,bac_select){
	$("#loading1").show();
	dataSetID=datasetID
	
webpath="0_files/slice/"+dataSetID;
bac_table_dir=webpath+"/bac_table";
bac_json=webpath+"/json";
overview_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/summary.txt", "", function(data_re) {
	overview_re=data_re;
});

slice_cluster_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/slice_cluster.txt", "", function(data_re) {
	slice_cluster_re=data_re;
});
spot_dev_re=slice_cluster_re;

bac_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/bac_infor.txt", "", function(data_re) {
	bac_re=data_re;
});
image_scale="";
$.ajaxSettings.async = false;
$.getJSON("0_files/innerpath/HE_scale.txt", "", function(data_re) {
	image_scale=data_re;
});
if (image_scale.hasOwnProperty(dataSetID)){
		 HEwidth=Number(image_scale[dataSetID].split(",")[0]);
		 HEheight=Number(image_scale[dataSetID].split(",")[1]);
		 clusterwidth=Number(image_scale[dataSetID].split(",")[3]);
		 clusterheight=Number(image_scale[dataSetID].split(",")[4]);
		 clusterDoubledt=image_scale[dataSetID].split(",")[2];
		 legend_loc=image_scale[dataSetID].split(",")[5];
}


////2.1 spot annotation

var slice_first_sq_cluster_num=slice_cluster_re["cluster_num"];
var slice_first_sq_clusters=slice_cluster_re["cluster_name"].split(",");
data_umap_st=[];
for (var i=0;i<slice_first_sq_cluster_num;i++){
//////umap/////
	var json0={};
	json0["name"]=slice_first_sq_clusters[i];
	var x=slice_first_sq_clusters[i]+"_x_umap";
	var y=slice_first_sq_clusters[i]+"_y_umap";
	var text0=slice_first_sq_clusters[i]+"_text_umap";
	var x_array=slice_cluster_re[x].split(",");
	var y_array=slice_cluster_re[y].split(",");
	var text0_array=slice_cluster_re[text0].split(",");
	json0["x"]=x_array;
	json0["y"]=y_array;
	json0["text"]=text0_array;
	json0["mode"]='markers';
	var color0=slice_first_sq_clusters[i]+"_color_umap";
	json_marker={};
	json_marker["color"]=slice_cluster_re[color0];
	json_marker["size"]=5;//点大小
	json0["marker"]=json_marker;
	data_umap_st.push(json0);

}
part2_slice_anno(slice_cluster_re,data_umap_st,image_scale,dataSetID);
part3_bac_infor(bac_re,bac_table_dir,webpath,Metagenome,bac_select);

document.getElementById("bac_infor_loc").innerHTML="Abundance of microbiota in slice of "+dataSetID;
$("#loading1").hide();
}




function part3_bac_infor(bac_re,bac_table_dir,webpath,metagenome_type_first,bac_select){
	
	//3.1 distribution
		//3.1.1 xmSelect  //   xmSelectBac
		Metagenome_xml('xml_bac',metagenome_type_first);
		//3.1.2 Bac color map  //    genus first
		bac_color_map(bac_re,metagenome_type_first);
		//3.1.3 stat
		bac_bar(bac_re,metagenome_type_first,'base_bac_stat');
		//3.1.4 table
		var path0=bac_table_dir+"/bac_"+metagenome_type_first+"_datatable.txt";
		var colnames0=bac_re[metagenome_type_first+"_subclass"].split(",");
		colnames0.sort(); 
		colnames0.unshift("spot");
		
		if ($.fn.dataTable.isDataTable('#base_bac_table')) {
			$('#base_bac_table').DataTable().clear().destroy();
		}
		autoColTable_bac(path0,colnames0,'base_bac_table');
	//3.2 express
		//3.2 xmlseclet
		bac_exp_xml_left(bac_re,metagenome_type_first,'bac_exp_xml_left','bac_exp_xml_right','bac_exp_table','bac_exp_color','bac_exp_bar',bac_select);
		
	//3.3 bac co-occ 
}


function  part2_slice_anno(slice_cluster_re,data_umap_st,image_scale,dataSetID){
//2.1
	if (image_scale.hasOwnProperty(dataSetID)){
		var HEwidth=Number(image_scale[dataSetID].split(",")[0]);
		var HEheight=Number(image_scale[dataSetID].split(",")[1]);
		var clusterwidth=Number(image_scale[dataSetID].split(",")[3]);
		var clusterheight=Number(image_scale[dataSetID].split(",")[4]);
		var clusterDoubledt=image_scale[dataSetID].split(",")[2];
		
		var img_dir='0_files/HE/'+dataSetID+'.png';
		document.getElementById("base_spatial_HE").src = img_dir;
		$("#base_spatial_HE").css("width",420);
		$("#base_spatial_HE").css("height",420);
		
		//2.1.2
		//st_umap_width_height_scale(data_umap_st,'base_spatial',"Cluster",clusterwidth,clusterheight,clusterDoubledt,legend_loc);
		st_umap_width_height(data_umap_st,'base_spatial',"Cluster",600,600);
		
		st_umap_width_height_noleg(data_umap_st,'base_cluster2',"Cluster",550,600);
		
	}else{
		//2.1.2
		st_umap_width_height(data_umap_st,'base_spatial',"Cluster",600,650);
	}
	//2.1.3
	//plotly_barplot_sq_stat(slice_first_sq_clusters,slice_cluster_re["cluster_spot_num"].split(","),slice_cluster_re["cluster_color"].split(","),'Spot Density','base_spatial_stat');
	//2.1.4
	var oldTable = $('#st_marker_table').dataTable();
	oldTable.fnClearTable(); //清空一下table
	oldTable.fnDestroy(); //还原初始化了的dataTable
	marker_table(webpath+"/ST_cluster_marker_table.txt",'st_marker_table');
	//2.1.5
	//plotly_barplot_stat(slice_cluster_re["cluster_name"].split(","),slice_cluster_re["ST_cluster_marker_num"].split(","),slice_cluster_re["cluster_color"].split(","),'Marker of clusters','base_spatial_marker_stat');
	//2.1.6
	cluster_st_select(slice_cluster_re,slice_cluster_re["cluster_name"].split(","),'base_spatial_violin_cluster_select','base_spatial_violin_select','base_spatial_violin');
//2.2////
	////if(slice_cluster_re.hasOwnProperty("ST_spatial_coooc")){
	////	document.getElementById("ls_coooc").innerHTML="No result";
	////}else{
	////dataTable_bac_gene_coooc(bac_table_dir+"/ST_spatial_coooc_gene_table.txt","st_gene_coocc_table");
	////echars_circos_cellcell(bac_json+"/kME_module1_jsonTable.json",'river_gene_coocc',0.98);
	////}
//2.2
	//2.3.1
	var dev_spots_name_arr=slice_cluster_re["dev_spots"].split(",");
	var dev_celltype_arr=slice_cluster_re["dev_celltype"].split(",");
	var dev_celltype_color_arr=slice_cluster_re["dev_celltype_color"].split(",");
	deconvolution_select(dev_spots_name_arr,slice_cluster_re,'deconvolution_select','spatial_spot_celltype');
	//2.3.2
	plotly_spatialSpotSctter_color(0.49,data_umap_st,'dev_spatial_plot','All spots','spatial_spot_celltype');
	//2.3.3
	plotly_barplot_first(0.49,dev_celltype_arr,slice_cluster_re["dev_spots_all_mean"].split(","),dev_celltype_color_arr,'All spots','spatial_spot_celltype');
//2.4
	//2.4.1
	var oldTable = $('#svg_table').dataTable();
	oldTable.fnClearTable(); //清空一下table
	oldTable.fnDestroy(); //还原初始化了的dataTable
	svgTable(webpath+"/ST_SVG_table.txt");
	
	//2.4.2~2.4.3
	var svg_first_name=slice_cluster_re["svg_first"];
	svg_spatial_first(svg_first_name);
	
}




function plotly_barplot(x,y,color,spotName,div){
	var title0="Deconvolution of "+spotName;
	var x=x;
	var y=y;
	var color=color;
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push("Cell Type : "+x[j]+" <br>"+"Ratio : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    color: color
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'Proportion ' ,
	        		    zeroline: true
	        		  },
			  height: 550,
			  title: title0,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}
function svg_spatial_onclick(svg0){
	var database_name=dataSetID+"_st".toLowerCase();
	///
	violin_copy_gene_st_marker(webpath,slice_cluster_re,dataSetID,svg0,'st','svg_violin');
	////
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,svg0,slice_spot_name,slice_spot_x,slice_spot_y,color,'svg_distribution');
				}
			}			
	var param="gene="+svg0+"&database_name="+database_name;
	xmlHttp.open("get","MysqlSpotExp.jsp?"+param,true);
	xmlHttp.send();
	////

}
function plotly_svgSpotScatter(width0,svg0,name,x,y,color,div){
	var width0=$("#width_id").width()*width0;
	var trace1 = {
	  x: x,
	  y: y,
	  mode: 'markers',
	  opacity:1.2,//透明度
	  text:name,
	  marker: {
		size: 6,
		color: color
	  }
	};
	var data = [trace1];
	var layout = {
	height:600,
	width: width0,
	font :{		    size :16,					},
	title: 'Expression of '+svg0,
	xaxis:{
		showticklabels : false
	},
	yaxis:{
		showticklabels : false
	}
	};
	Plotly.newPlot(div, data, layout);

	}


function plotly_violin_widthScale(celltype_all,color_all,filepath,title,div,width0){
	var filepath=filepath;
	var title_n=title;
	var div=div;
	var width0=$("#width_id").width()*width0;
	
	//for change violin
	var style_all=[];
	for (var i=0;i<celltype_all.length;i++)
		{ 	var json0={};
			var json_value={};
			var json_color={};
			json_color["color"]=color_all[i];
			json_value["line"]=json_color;
			json0["target"]=celltype_all[i];
			json0["value"]=json_value;
			style_all.push(json0);
		}
	
	d3.csv(filepath, function(err, rows){
  	  function unpack(rows, key) {
  	  return rows.map(function(row) { return row[key]; });
  	  }
  	var data = [{
  	  type: 'violin',
  	  x: unpack(rows, 'violin_x'),
  	  y: unpack(rows, 'violin_y'),
  	  points: 'none',//all
  	  box: {
  	    visible: true
  	  },
  	  meanline: {
  	    visible: true
  	  },
  	  transforms: [{
  	  	 type: 'groupby',
  		 groups: unpack(rows, 'violin_x'),
  		styles: style_all
  		 
  		}]
  	}]
  	
  	var layout = {
	height: 500,
	width:width0,
	font :{
		  size :16,
	  },
  	  title: title_n,
  	legend: {
   	    font: {
   	      size: 12,
   	    }
   	  },
  	  yaxis: {
  		  //range: [0, 7800],
  		title:'Expression of marker',
  	    zeroline: true
  	  }
  	}

  	Plotly.newPlot(div, data, layout);
  	});
}
function bac_bar(bac_re,metagenome_type,div){
	var x=bac_re[metagenome_type+"_pie_name"].split(",");
	var y=bac_re[metagenome_type+"_pie_value"].split(",");
	var color=bac_re[metagenome_type+"_pie_color"].split(",");
	var div=div;
	var width_div=$("#width_id").width();
	//$("#"+div).css("width",width_div);
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push(metagenome_type+" : "+x[j]+" <br>"+"No. of UMI : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    //color: color
				  color:["#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF","#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF","#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF","#A7CBEF","#F9D977","#B196C1","#C2E3EC","#7CBFB6","#EFA7A9","#E4CFB2","#DC98BF","#5F91C7","#ECBEAA","#D7B7DF","#D8D9C1","#EEF0A5","#92CBDC","#FFCCCC","#99CCCC","#EEF0A5","#CCCCFF","#FFCC99","#99CCFF"]
			  
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'No. of UMI ' ,
	        		    zeroline: true
	        		  },
			  height: 500,
			  width: width_div,
			  title: metagenome_type,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}
function autoColTable_bac(path,colnames,div){
	//colnames：会写到页面上，colname和匹配文件中的key。
	var table_inner="<thead ><tr class='table_head1'>";
	var columns=[];
	for (var i=0;i<colnames.length;i++){
		table_inner=table_inner+"<th>"+colnames[i]+"</th>";
		json={};
		json['data']=colnames[i];
		columns.push(json);
	}
	table_inner=table_inner+"</tr></thead>";
	document.getElementById(div).innerHTML=table_inner;
	
	$(document).ready(function() {
    		$("#"+div).DataTable( {
    		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
			"searching" : false,//开关,search 
            //"aLengthMenu": [10,20,30],//设置每页显示数据条数的下拉选项
            'iDisplayLength': 8, //每页初始显示5条记录
    		"deferRender": true,
    		"bProcessing": true, 
    		"paginationType": "full_numbers",
    		"serverSide": false, 
    		"order": [[ 1, 'desc' ]],
    		'ajax': path,
    		'columns':columns
    		
    		} );  
    		} );
	
}

function bac_exp_xml_left(bac_re,metagenome_type_first,div_left,div_right,table_div,color_plot_div,barplot_div,bac_select){
	var data_option=bac_re["metagenome_type"].split(",");
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div_left;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var metagenome_type0=arr[0]["value"];
							///
							bac_exp_xml_right(bac_re,metagenome_type0,div_right,table_div,color_plot_div,barplot_div,bac_select);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: metagenome_type_first, value: metagenome_type_first},
			])
			//
			bac_exp_xml_right(bac_re,metagenome_type_first,div_right,table_div,color_plot_div,barplot_div,bac_select);
			
			

}




function bac_exp_xml_right(bac_re,metagenome_type,div_right,table_div,color_plot_div,barplot_div,bac_select){
	var data_option=bac_re[metagenome_type+"_subclass"].split(",");
	var data_option_valuearray = [];
	
	if(data_option.indexOf(bac_select)==-1){
		bac_select=data_option[0];
	}
	
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div_right;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var metagenome0=arr[0]["value"];
							///
							bac_exp_table_colorPlot_onclick(bac_re,metagenome_type,metagenome0,table_div,color_plot_div);
							
							
							var value0=[];
							bac0_num=bac_re[metagenome_type+"_"+metagenome0+"_x_umap"].split(",").length;
							//bac0_other_num=slice_cluster_re["spots_x"].split(",").length-bac0_num;
							var bac0_other_num=0;
							var metagenome_type_sub_detailes=bac_re[metagenome_type+"_subclass"].split(",");
							for (var jj=0; jj < metagenome_type_sub_detailes.length; jj++){
								bac0_other_num=bac0_other_num+bac_re[metagenome_type+"_"+metagenome_type_sub_detailes[jj]+"_x_umap"].split(",").length;
							}
							bac0_other_num=bac0_other_num-bac0_num;
							value0.push(bac0_num);
							value0.push(bac0_other_num);
							var labels0=[];
							labels0.push(metagenome0);
							labels0.push('Other');
							var color0=[];
							color0.push(bac_re[metagenome_type+"_"+metagenome0+"_color_umap"]);
							color0.push('#B6B6B6');
							plotyPielot_sq(value0,labels0,metagenome_type+' density',barplot_div,color0);
							
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: bac_select, value: bac_select},
			])
			//
			bac_exp_table_colorPlot(bac_re,metagenome_type,bac_select,table_div,color_plot_div);
			
			var value0=[];
			bac0_num=bac_re[metagenome_type+"_"+bac_select+"_x_umap"].split(",").length;
			//bac0_other_num=slice_cluster_re["spots_x"].split(",").length-bac0_num;
			var bac0_other_num=0;
			var metagenome_type_sub_detailes=bac_re[metagenome_type+"_subclass"].split(",");
			for (var jj=0; jj < metagenome_type_sub_detailes.length; jj++){
				bac0_other_num=bac0_other_num+bac_re[metagenome_type+"_"+metagenome_type_sub_detailes[jj]+"_x_umap"].split(",").length;
			}
			bac0_other_num=bac0_other_num-bac0_num;
			value0.push(bac0_num);
			value0.push(bac0_other_num);
			var labels0=[];
			labels0.push(data_option[0]);
			labels0.push('Other');
			var color0=[];
			color0.push(bac_re[metagenome_type+"_"+bac_select+"_color_umap"]);
			color0.push('#B6B6B6');
			plotyPielot_sq(value0,labels0,metagenome_type+' density',barplot_div,color0);

}
function bac_exp_table_colorPlot_onclick(bac_re,metagenome_type,metagenome_subtype,table_div,color_plot_div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				////
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,metagenome_subtype,slice_spot_name,slice_spot_x,slice_spot_y,color,color_plot_div);
				
				///table 
				var path0="0_files/bacExpDatatable.txt"
				var colnames0=["Spots name",metagenome_type,"Expression"];
				
				//var oldTable = $('#'+table_div).dataTable();
				//oldTable.fnClearTable(); //清空一下table
				//oldTable.fnDestroy(); //还原初始化了的dataTable
				
				if ($.fn.dataTable.isDataTable('#'+table_div)) {
					$('#'+table_div).DataTable().clear().destroy();
				}
				
				autoColTable_bac_exp(path0,colnames0,table_div);
				
			}else{
				$("#"+color_plot_div).hide();
			}
				}
			}
	var param="metagenome_type="+metagenome_type+"&metagenome_subtype="+metagenome_subtype+"&dataSetID="+dataSetID;
	xmlHttp.open("get","MysqlExp.jsp?"+param,true);
	xmlHttp.send();
	
}
function autoColTable_bac_exp(path,colnames,div){
	//colnames：会写到页面上，colname和匹配文件中的key。
	var table_inner="<thead ><tr class='table_head1'>";
	var columns=[];
	for (var i=0;i<colnames.length;i++){
		table_inner=table_inner+"<th>"+colnames[i]+"</th>";
		json={};
		json['data']=colnames[i];
		columns.push(json);
	}
	table_inner=table_inner+"</tr></thead>";
	document.getElementById(div).innerHTML=table_inner;
	
	$(document).ready(function() {
    		$("#"+div).DataTable( {
    		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
			"searching" : false,//开关,search 
            //"aLengthMenu": [10,20,30],//设置每页显示数据条数的下拉选项
            'iDisplayLength': 8, //每页初始显示5条记录
    		"deferRender": true,
    		"bProcessing": true, 
    		"paginationType": "full_numbers",
    		"serverSide": false, 
    		"order": [[ 2, 'desc' ]],
    		'ajax': path,
    		'columns':[
		{'data':'spot'},
		//{'data':'mainclass'},
		{'data':'subclass'},
		{'data':'exp'}
		]
    		
    		} );
    		} );
	
}
function plotyPielot_sq(value,labels,title,div,color){	
		//自定义 hovertext
		var text1=[];
		for (var j=0;j<value.length;j++){
		text1.push("Class :  "+labels[j]+"   <br>"+"Spot number : "+value[j]+"  ");
		}
		var data = [{
				automargin: true,
				values: value,
				labels: labels,
				  hovertext :text1,
				  hoverinfo :"text",
				marker: {colors: color},
				type: 'pie'
					}];
			var layout = {
		  margin: {"t": 100, "b": 60, "l": 60, "r": 100}, //图边缘距离画布上下左右边界的距离，单位px
		  height: 550,
		 // width: 500,
		  title: title,
		  showlegend: false,
		  font: {size: 15}
		};

		Plotly.newPlot(div, data, layout);
	}
function violin_copy_gene_svg(webpath,slice_cluster_re,dataset0,gene0,type0,div,widthScale){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				var violin_filename=jsonobj.violin_filename;
				//plot
				$("#"+div).show();
				var celltype_all="";
				var color_all="";
				
				celltype_all=slice_cluster_re["cluster_name"].split(",");
				color_all=slice_cluster_re["cluster_color"].split(",");
				
				var filepath="0_files/violin/"+violin_filename;
				//console.log(filepath);
				
				plotly_violin_widthScale(celltype_all,color_all,filepath,gene0,div,widthScale);
				
			}else{
				$("#"+div).hide();
			}
				}
			}
	var param="gene0="+gene0+"&type0="+type0+"&dataset0="+dataset0;
	xmlHttp.open("get","MysqlViolin.jsp?"+param,true);
	xmlHttp.send();
}
function plotly_violin(celltype_all,color_all,filepath,title,div){
	var filepath=filepath;
	var title_n=title;
	var div=div;
	//for change violin
	var style_all=[];
	for (var i=0;i<celltype_all.length;i++)
		{ 	var json0={};
			var json_value={};
			var json_color={};
			json_color["color"]=color_all[i];
			json_value["line"]=json_color;
			json0["target"]=celltype_all[i];
			json0["value"]=json_value;
			style_all.push(json0);
		}
	
	d3.csv(filepath, function(err, rows){
  	  function unpack(rows, key) {
  	  return rows.map(function(row) { return row[key]; });
  	  }
  	var data = [{
  	  type: 'violin',
  	  x: unpack(rows, 'violin_x'),
  	  y: unpack(rows, 'violin_y'),
  	  points: 'none',//all
  	  box: {
  	    visible: true
  	  },
  	  meanline: {
  	    visible: true
  	  },
  	  transforms: [{
  	  	 type: 'groupby',
  		 groups: unpack(rows, 'violin_x'),
  		styles: style_all
  		 
  		}]
  	}]
  	
  	var layout = {
	height: 500,
	//width:width0,
	font :{
		  size :16,
	  },
  	  title: title_n,
  	legend: {
   	    font: {
   	      size: 14,
   	    }
   	  },
  	  yaxis: {
  		  //range: [0, 7800],
  		title:'Expression of marker',
  	    zeroline: true
  	  }
  	}

  	Plotly.newPlot(div, data, layout);
  	});
}
function violin_copy_gene_st_marker(webpath,slice_cluster_re,dataset0,gene0,type0,div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				var violin_filename=jsonobj.violin_filename;
				//plot
				$("#"+div).show();
				var celltype_all="";
				var color_all="";
				
				celltype_all=slice_cluster_re["cluster_name"].split(",");
				color_all=slice_cluster_re["cluster_color"].split(",");
				
				var filepath="0_files/violin/"+violin_filename;
				//console.log(filepath);
				
				plotly_violin(celltype_all,color_all,filepath,gene0,div);
				
			}else{
				$("#"+div).hide();
			}
				}
			}
	var param="gene0="+gene0+"&type0="+type0+"&dataset0="+dataset0;
	xmlHttp.open("get","MysqlViolin.jsp?"+param,true);
	xmlHttp.send();
}
function marker_st_select(marker_first,marker_name,div,violinDiv){
	var data_option=marker_name;
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a marker for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var gene0=arr[0]["value"];
							///
							//var slice0=xmSelect.get('#overview_select', true).getValue('valueStr');
							violin_copy_gene_st_marker(webpath,slice_cluster_re,dataSetID,gene0,'st',violinDiv);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: marker_first, value: marker_first},
			])
			//var slice0=xmSelect.get('#overview_select', true).getValue('valueStr');
			violin_copy_gene_st_marker(webpath,slice_cluster_re,dataSetID,marker_first,'st',violinDiv);

}

function svg_spatial_first(svg0){
	//var slice_select0=overview_re.slice_first;
	var database_name=dataSetID+"_st".toLowerCase();
	///
	violin_copy_gene_svg(webpath,slice_cluster_re,dataSetID,svg0,'st','svg_violin',0.5);
	////
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,svg0,slice_spot_name,slice_spot_x,slice_spot_y,color,'svg_distribution');
				}
			}			
	var param="gene="+svg0+"&database_name="+database_name;
	xmlHttp.open("get","MysqlSpotExp.jsp?"+param,true);
	xmlHttp.send();
	////
}


function plotly_barplot_first(width0,x,y,color,spotName,div){
	var title0="Deconvolution of "+spotName;
	var width0=$("#width_id").width()*width0;
	var x=x;
	var y=y;
	var color=color;
	var div=div;
	var width_bar=[];
	if (color.length>6){
		width_bar="";
	}else{
		for (var i=0;i<color.length;i++){
			width_bar.push(0.3);
		}
	}
	//自定义 hovertext
	var text1=[];
	for (var j=0;j<x.length;j++){
	text1.push("Cell Type : "+x[j]+" <br>"+"Ratio : "+y[j]+"  ");
	}
	var trace1 = {
			  x: x,
			  y: y,
			 // text: y.map(String),
			  //textposition: 'auto',
			  //hoverinfo: 'none',
			  width: width_bar,
			  hovertext :text1,
	          hoverinfo :"text",//"x", "y", "z", "text", "name" joined with a "+" OR "all" or "none" or "skip". Examples: "x", "y", "x+y", "x+y+z", "all"
			  marker:{
			    color: color
			  },
			  type: 'bar'
			};
			var data = [trace1];
			var layout = {
				yaxis: {
	        		    //range: [0, 8],
	        		    title: 'Proportion ' ,
	        		    zeroline: true
	        		  },
			  height: 550,
			  width: width0,
			  title: title0,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
}
function plotly_spatialSpotSctter_color(width0,data,div,title0,barDiv){
	var data=data;
	var div=div;
	var width0=$("#width_id").width()*width0;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: 600,
	         width: width0,
	        showlegend: false,
			title:'Slice',
			 font: {size: 15},
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
    	   	    orientation: 'v',//h.v
//     	   	    xanchor: 'center',
//     	   	    x: 0,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 16,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
Plotly.newPlot(div, data, layout, {showSendToCloud: true});
myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
    //alert('Closest point clicked:\n\n'+pts);
   // var slice_select0=xmSelect.get('#'+xmlDiv, true).getValue('valueStr');
    var spot_celltypes=spot_dev_re["dev_celltype"].split(",");
	var spot_color=spot_dev_re["dev_celltype_color"].split(",");
	var spot0_y=spot_dev_re[spot_name0].split(",");
	
	plotly_barplot(spot_celltypes,spot0_y,spot_color,spot_name0,barDiv);
	
});


////plotly_selected event
var color1Light = '#c2a5cf';
var N =0;
for(var i=0;i<data.length;i++){
  N =N+ data[i]["x"].length;
}
myPlot.on('plotly_selected', function(eventData) {
	  var x = [];
	  var y = [];
	  var colors = [];
	  for(var i = 0; i < N; i++) colors.push(color1Light);
	  //console.log(eventData.points)
	  var x_lasso=[];
	  var y_lasso=[];
	  var color_lasso=[];
	  var spotsName_lasso=[];
	  eventData.points.forEach(function(pt) {
	   // console.log(pt.data.marker.color)
		  for(var jj=0;jj<pt.data.selectedpoints.length;jj++){
		      spotsName_lasso.push(pt.data.text[pt.data.selectedpoints[jj]]);
		    }
	    x.push(pt.x);
	    y.push(pt.y);
	    colors[pt.pointNumber] = pt.data.marker.color;
	    //colors[pt.pointNumber] = color1Light; //要选中的是一个颜色的话
	    x_lasso.push(pt.data.name);
	    color_lasso.push(pt.data.marker.color);
	   //color_lasso.push(color1Light);
	  });
	 var x_lasso_u = Array.from(new Set(x_lasso));
	 var color_lasso_u= Array.from(new Set(color_lasso));
	 spotsName_lasso= Array.from(new Set(spotsName_lasso)); 
	 ////celltype num
	for(var i = 0; i< x_lasso_u.length; i++ ){
	  var num0=0;
	  var ct0=x_lasso_u[i];
	  for (var j = 0; j< x_lasso.length; j++){
	    if(x_lasso[j]==ct0){
	      num0=num0+1;
	    }
	  }
	  y_lasso.push(num0);
	}
	 ///celltype hovertext
	  var hovertext_lasso=[];
		for (var j=0;j<x_lasso_u.length;j++){
		hovertext_lasso.push("Cluster : "+x_lasso_u[j]+" <br>"+"Spot Number : "+y_lasso[j]+"  ");
		}
//	  console.log(x_lasso_u);
//	  console.log(y_lasso);
//	  console.log(color_lasso_u);

/// bar 统计选中区域的细胞类型的比例
		var spot_celltypes=spot_dev_re["dev_celltype"].split(",");
		var spot_color=spot_dev_re["dev_celltype_color"].split(",");
		var spot0_y=[];
		for (var i=0;i<spot_celltypes.length;i++){
			var c0_num=[];
			for (var j=0;j<spotsName_lasso.length;j++){
				c0_num.push(spot_dev_re[spotsName_lasso[j]].split(",")[i]);
			}
			//console.log(c0_num);
			spot0_y.push(arr_sum(c0_num));
			//console.log(spot0_y);
		}
		//归一化
		var spot_all_y_1=[];
		for(var j=0;j<spot0_y.length;j++){
			spot_all_y_1.push((spot0_y[j])/(arr_sum(spot0_y)));
		}
		plotly_barplot(spot_celltypes,spot_all_y_1,spot_color,'select region',barDiv);
	});

}

function cluster_st_select(slice_cluster_re,cluster_names,div,marker_selectDiv,violinDiv){
	var data_option=cluster_names;
	var data_option_valuearray = [];
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a marker for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var cluster0=arr[0]["value"];
							///
							var Cluster0_marker_name =slice_cluster_re[cluster0+"_marker_name"].split(",");
							marker_st_select(Cluster0_marker_name[0],Cluster0_marker_name,marker_selectDiv,violinDiv);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
			var Cluster0_marker_name =slice_cluster_re[data_option[0]+"_marker_name"].split(",");
			marker_st_select(Cluster0_marker_name[0],Cluster0_marker_name,marker_selectDiv,violinDiv);

	
}
function marker_table(path,div){
	var path=path;
	$(document).ready(function() {
		$('#'+div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
		"searching":false,
		"deferRender": true,//big data
		"bProcessing": true, //显示是否加载 
		"paginationType": "full_numbers",//详细分页组，可以支持直接跳转到某页 
		//'paging': false,
		"serverSide": false,      //后台处理分页则为true  
		"aaSorting": [[ 1, "desc" ]],
		'ordering'  :true,
		'ajax': path,
		//"columnDefs": [ {targets: 1, orderable: false, width: "10%"}, ] ,
		'columns':[
{'data':'clusterName'},
{'data':'gene'},
{'data':'pct_1'},
{'data':'pct_2'},
{'data':'avg_log2FC'},
{'data':'p_val'},
{'data':'p_val_adj'}
					]
		} );  
		} );

}


function st_umap_width_height_noleg(data,div,title0,width,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         width: width,
	         font: {size: 15},
	        showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:'Cluster',
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 12,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}
function st_umap_width_height(data,div,title0,width,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         width: width,
	         font: {size: 15},
	        //showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:'Cluster',
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 12,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}
function deconvolution_select(spots_name,spot_dev_re,div,barDiv){
	var data_option=spots_name;
	var data_option_valuearray = [];
	//json={}
	//json['name']="All spots";
	//json['value']="full";
	//data_option_valuearray.push(json);
	for (var i=0;i<data_option.length;i++)
					{ 
						json={}
						json['name']=data_option[i];
						json['value']=data_option[i];
						data_option_valuearray.push(json);
					}
					var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a spot for view',
						radio: true,
						clickClose: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var spot_name0=arr[0]["value"];
							///
							//var slice_select0=xmSelect.get('#'+xmlDiv, true).getValue('valueStr');
							
							var spot_celltypes=spot_dev_re["dev_celltype"].split(",");
							var spot_color=spot_dev_re["dev_celltype_color"].split(",");
							var spot0_y=spot_dev_re[spot_name0].split(",");
							plotly_barplot(spot_celltypes,spot0_y,spot_color,spot_name0,barDiv);
						}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			                     {name: 'All spots', value: 'full'},
			])

}



function svgTable(path){
	var path=path;
	$(document).ready(function() {
		$("#svg_table").DataTable( {
			"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
        //"aLengthMenu": [15,20,30],//设置每页显示数据条数的下拉选项
        'iDisplayLength': 5, //每页初始显示?条记录
		"deferRender": true,
		"searching":false,
		"bProcessing": true, 
		"paginationType": "full_numbers",
		"serverSide": false, 
		"order": [[ 1, 'desc' ]],
		'ajax': path,
		'columns':[
		{'data':'gene'},
		{'data':'MoransI_observed'},
		{'data':'MoransI_p'},
		{'data':'MoransI_FDR'},
		{'data':'cluster'},
		//{'data':'celltype'},
		{'data':null,
		"render": function ( data, type, row, meta ) {  
		return  "<i class='fa fa-line-chart' aria-hidden='true' style='font-size:20px;cursor: pointer;color:#ff9a18'  onclick= "+'"'+"svg_spatial_onclick("+"'"+row['gene']+"'"+')"'+" ></i> ";
								                    }//data是对应当前cell的值，row是对应当前行中的所有cell的值
		}
		]
		} );  
		} );
}
function bac_color_map(bac_re,metagenome_type){
	var metagenome_type0_cluster=bac_re[metagenome_type+"_subclass"].split(",");
	metagenome_type0_cluster.sort();  
	var num_cluster=metagenome_type0_cluster.length;
	data_umap_bac=[];
	
	var json0={};
	json0["name"]="None_Bacteria";
	json0["x"]=bac_re['noneBac_x_umap'].split(",");
	json0["y"]=bac_re['noneBac_y_umap'].split(",");
	json0["text"]=bac_re['noneBac_text_umap'].split(",");
	json0["mode"]='markers';
	json_marker={};
	json_marker["color"]=bac_re['noneBac_color_umap'];
	json_marker["size"]=5;//点大小
	json0["marker"]=json_marker;
	data_umap_bac.push(json0);
	for (var i=0;i<num_cluster;i++){
		var json0={};
		json0["name"]=metagenome_type0_cluster[i];
		var x=metagenome_type+"_"+metagenome_type0_cluster[i]+"_x_umap";
		var y=metagenome_type+"_"+metagenome_type0_cluster[i]+"_y_umap";
		var text0=metagenome_type+"_"+metagenome_type0_cluster[i]+"_text_umap";
		var x_array=bac_re[x].split(",");
		var y_array=bac_re[y].split(",");
		var text0_array=bac_re[text0].split(",");
		json0["x"]=x_array;
		json0["y"]=y_array;
		json0["text"]=text0_array;
		json0["mode"]='markers';
		var color0=metagenome_type+"_"+metagenome_type0_cluster[i]+"_color_umap";
		json_marker={};
		json_marker["color"]=bac_re[color0];
		json_marker["size"]=5;//点大小
		json0["marker"]=json_marker;
		data_umap_bac.push(json0);

	}
	
	//plot
	bac_umap_width_height(data_umap_bac,'base_bac',metagenome_type,0.55,600);
}

function bac_umap_width_height(data,div,title0,width0,height){
	var width0=$("#width_id").width()*width0;
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         width: width0,
	         font: {size: 12},
	        //showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:title0,
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
     	   	    //orientation: 'h',//h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    font: {
    	   	      size: 15,
    	   	    }
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}


function bac_exp_table_colorPlot(bac_re,metagenome_type,metagenome_subtype,table_div,color_plot_div){
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			if(jsonobj.error_attention=="no"){
				////
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.55,metagenome_subtype,slice_spot_name,slice_spot_x,slice_spot_y,color,color_plot_div);
				
				///table 
				var path0="0_files/bacExpDatatable.txt"
				var colnames0=["Spots name",metagenome_type,"Expression"];
				
				//var oldTable = $('#'+table_div).dataTable();
				//oldTable.fnClearTable(); //清空一下table
				//oldTable.fnDestroy(); //还原初始化了的dataTable
				if ($.fn.dataTable.isDataTable('#'+table_div)) {
					$('#'+table_div).DataTable().clear().destroy();
				}
				autoColTable_bac_exp(path0,colnames0,table_div);
			
			}else{
				$("#"+color_plot_div).hide();
			}
				}
			}
	var param="metagenome_type="+metagenome_type+"&metagenome_subtype="+metagenome_subtype+"&dataSetID="+dataSetID;
	xmlHttp.open("get","MysqlExp.jsp?"+param,true);
	xmlHttp.send();
	
}


function Metagenome_xml(div,Metagenome){
	var data_option_valuearray = [
				{name: 'Kingdom', value: 'kingdom'},
			{name: 'Phylum', value: 'phylum'},
			{name: 'Class', value: 'class'},
			{name: 'Order', value: 'order'},
			{name: 'Family', value: 'family'},
			{name: 'Genus', value: 'genus'},
			{name: 'Species', value: 'species'},
			];
		var e="#"+div;
					var demo1_gene = xmSelect.render({
						el: e, 
						filterable: true,
						size: 'big',//选中的之后显示的字的大小
					    theme: {color: '#ff9a18',},//主题颜色
						tips: 'Select a key for view',
						style: {
		marginLeft: '0px',
		borderRadius: '1px',
		height: '48px',
		//width:'400px',
		border: '1px solid #ced4da',
	},
						radio: true,
						clickClose: true,
						filterable: true,
						data: [],
						on: function(data){//监听
							var arr = data.arr;
							var change = data.change;
							//isAdd, 此次操作是新增还是删除
							var isAdd = data.isAdd;
							var value0=arr[0]["value"];

							 bac_color_map(bac_re,value0);
							 bac_bar(bac_re,value0,'base_bac_stat');
							 //var oldTable = $('#base_bac_table').dataTable();
							//oldTable.fnClearTable(); //清空一下table
							//oldTable.fnDestroy(); //还原初始化了的dataTable
							if ($.fn.dataTable.isDataTable('#base_bac_table')) {
								$('#base_bac_table').DataTable().clear().destroy();
							}
							var path0=bac_table_dir+"/bac_"+value0+"_datatable.txt";
							var colnames0=bac_re[value0+"_subclass"].split(",");
							colnames0.sort(); 
							colnames0.unshift("spot");
							autoColTable_bac(path0,colnames0,'base_bac_table');
							
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
	// 赋值
			demo1_gene.setValue([
			{name: Metagenome, value: Metagenome},
			])
}


function st_umap_width_height_scale(data,div,title0,width,height,clusterDoubledt,legend_loc){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	if(legend_loc=="r"){
		 width=(width+60);
		 orientation0='v';
	 }else{
    width=(width);
	orientation0='h';
	 }

	var layout = {
	         height: height*clusterDoubledt,
			 
			 width: (width)*clusterDoubledt,
	         font: {size: 16},
	        //showlegend: false,
	         //margin: {"t": 80, "b": 150, "l": 30, "r": 5},
			title:'Cluster',
			legend: {
//     	   	    bgcolor: 'white',
//     	   	    borderwidth: 1,
//     	   	    bordercolor: 'black',
				
				orientation: orientation0,
				font: {
    	   	      size: 15,
    	   	    },
     	   	    //h.v
     	   	   // xanchor: 'center',
     	   	    //x: 10,
     	   	    //y:-0.2,
    	   	    
    	   	  },
	        		  xaxis: {
	        		    showticklabels : false
	        		  },
	        		  yaxis: {
	        		    showticklabels : false
	        		  
	        		  }
	    }
	    Plotly.newPlot(div, data, layout, {showSendToCloud: true});
		myPlot.on('plotly_click', function(data){
    var pts = '';
    var spot_name0 = '';
    for(var i=0; i < data.points.length; i++){
        pts = 'x = '+data.points[i].x +'\ny = '+ data.points[i].y +'\nname = '+ data.points[i].text+ '\n\n';
        spot_name0=data.points[i].text;
    }
 

	
});
}

function arr_sum(arr0){
	var sum0=0;
	for (var i=0;i<arr0.length;i++){
		sum0 =sum0+Number(arr0[i]);
	}
	return sum0;
}
