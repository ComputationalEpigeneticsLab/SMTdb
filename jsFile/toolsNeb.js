innerpath="0_files/innerpath";
Metagenome_subclass_infor="";
$.ajaxSettings.async = false;
$.getJSON(innerpath+"/Metagenome_subclass.txt", "", function(data_re) {
	Metagenome_subclass_infor=data_re;
});
//first select be with xml_bac_m
Metagenome_subclass_xml("xml_bac_detail",Metagenome_subclass_infor,"genus");
toolsDetailShow('GSE206552_GSM6256811','genus','Citrobacter');


function toolsNeb(){
	$("#loading1").show();
	var Metagenome = xmSelect.get('#xml_bac_m', true).getValue('valueStr');
	var bac= xmSelect.get('#xml_bac_detail', true).getValue('valueStr');
	var neb= xmSelect.get('#xml_neb', true).getValue('valueStr');
	
	
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
				//var oldTable = $('#tools_sub_table').dataTable();
				//oldTable.fnClearTable(); //清空一下table
				//oldTable.fnDestroy(); //还原初始化了的dataTable
				
				if ($.fn.dataTable.isDataTable('#tools_sub_table')) {
					$('#tools_sub_table').DataTable().clear().destroy();
				}
				ToolsSubTable_neb("0_files/ToolsBacNeb.txt",Metagenome,bac,neb);
			}else{
				////
				document.getElementById("ToolsSearchTable").style.display="block";
				document.getElementById("ToolsSearchTable").innerHTML="No result";
			}
			$("#loading1").hide();
				}
			}
	var param="neb="+neb+"&Metagenome="+Metagenome+"&bac="+bac+"&toolsType=bacNeb";
	
	xmlHttp.open("get","MysqlTools.jsp?"+param,true);
	xmlHttp.send();
	
}




function ToolsSubTable_neb(path,Metagenome,bac,neb){
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
		{'data':null,"render": function ( data, type, row, meta ) { return Metagenome ;}},
		{'data':null,"render": function ( data, type, row, meta ) { return bac ;}},
		{'data':'neb_num'},
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


bac_neb_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/bac_neighborhood_infor.txt", "", function(data_re) {
	bac_neb_re=data_re;
});

bac_fun_re="";
$.ajaxSettings.async = false;
$.getJSON(webpath+"/part5_bac_function_infor.txt", "", function(data_re) {
	bac_fun_re=data_re;
});

///////////part4 Bac neighborhood//////////
var neb_number=bac_neb_re["cluster_num"];
var neb_clusters=bac_neb_re["cluster_name"].split(",");
var neb_color=bac_neb_re["cluster_color"].split(",");
data_umap_st_neb=[];
for (var i=0;i<neb_number;i++){
//////umap/////
	var json0={};
	json0["name"]=neb_clusters[i];
	var x=neb_clusters[i]+"_x_umap";
	var y=neb_clusters[i]+"_y_umap";
	var text0=neb_clusters[i]+"_text_umap";
	var x_array=bac_neb_re[x].split(",");
	var y_array=bac_neb_re[y].split(",");
	var text0_array=bac_neb_re[text0].split(",");
	json0["x"]=x_array;
	json0["y"]=y_array;
	json0["text"]=text0_array;
	json0["mode"]='markers';
	var color0=neb_color[i];
	json_marker={};
	json_marker["color"]=color0;
	json_marker["size"]=5;//点大小
	json0["marker"]=json_marker;
	data_umap_st_neb.push(json0);

}
part4_bac_neb(bac_neb_re,data_umap_st_neb,webpath,bac_table_dir,Metagenome,bac_select);
part5_bac_func(bac_fun_re,webpath,bac_table_dir);

document.getElementById("bac_neb_loc").innerHTML="Spatial neighborhood of microbiota in "+dataSetID;
$("#loading1").hide();
}
function part5_bac_func(bac_fun_re,webpath,bac_table_dir){
	//5.1
		//5.1.1  mal
		if(bac_fun_re["mal_infor"]=="yes"){
			if(bac_fun_re.hasOwnProperty("mal_genename")){
				var fun_number_mal=bac_fun_re["mal_cluster_num"];
				var fun_clusters_mal=bac_fun_re["mal_cluster_name"].split(",");
				data_umap_st_fun_mal=[];
				for (var i=0;i<fun_number_mal;i++){
				//////umap/////
					var json0={};
					json0["name"]=fun_clusters_mal[i];
					var x=fun_clusters_mal[i]+"_x_umap";
					var y=fun_clusters_mal[i]+"_y_umap";
					var text0=fun_clusters_mal[i]+"_text_umap";
					var x_array=bac_fun_re[x].split(",");
					var y_array=bac_fun_re[y].split(",");
					var text0_array=bac_fun_re[text0].split(",");
					json0["x"]=x_array;
					json0["y"]=y_array;
					json0["text"]=text0_array;
					json0["mode"]='markers';
					var color0=fun_clusters_mal[i]+"_color_umap";
					json_marker={};
					json_marker["color"]=bac_fun_re[color0];
					json_marker["size"]=5;//点大小
					json0["marker"]=json_marker;
					data_umap_st_fun_mal.push(json0);
				}
				st_umap_height_noleg_width(data_umap_st_fun_mal,'bac_fun_color_mal','Microbiota distribution',650);
				//volcano
				volcano_plot_bac_fun_diff_mal(bac_fun_re,"bac_fun_gene_diff_mal_volcano");
				//differ table
				var  path0=bac_table_dir+"/ST_fun_diff_mal_table.txt";
				if ($.fn.dataTable.isDataTable('#bac_fun_mal_diff_table')) {
					$('#bac_fun_mal_diff_table').DataTable().clear().destroy();
				}
				bac_fun_diff_table(path0,"bac_fun_mal_diff_table");
				//ssgsea heatmap
				ssgsea_hetamap_pher_table("mal",bac_fun_re,"bac_fun_heatmap_mal","bac_fun_mal_phyper_table");
			}else{
				//document.getElementById("bac_f_m").style.display="none";
				document.getElementById("bac_f_m").innerHTML="No result";
			}
		}else{
			//document.getElementById("bac_f_m").style.display="none";
			document.getElementById("bac_f_m").innerHTML="No result";
		}
		
		
	//5.2
		//5.2.1 bdy
		if(bac_fun_re["bdy_infor"]=="yes"){
			if(bac_fun_re.hasOwnProperty("bdy_genename")){
				var fun_number_bdy=bac_fun_re["bdy_cluster_num"];
				var fun_clusters_bdy=bac_fun_re["bdy_cluster_name"].split(",");
				data_umap_st_fun_bdy=[];
				for (var i=0;i<fun_number_bdy;i++){
				//////umap/////
					var json0={};
					json0["name"]=fun_clusters_bdy[i];
					var x=fun_clusters_bdy[i]+"_x_umap";
					var y=fun_clusters_bdy[i]+"_y_umap";
					var text0=fun_clusters_bdy[i]+"_text_umap";
					var x_array=bac_fun_re[x].split(",");
					var y_array=bac_fun_re[y].split(",");
					var text0_array=bac_fun_re[text0].split(",");
					json0["x"]=x_array;
					json0["y"]=y_array;
					json0["text"]=text0_array;
					json0["mode"]='markers';
					var color0=fun_clusters_bdy[i]+"_color_umap";
					json_marker={};
					json_marker["color"]=bac_fun_re[color0];
					json_marker["size"]=5;//点大小
					json0["marker"]=json_marker;
					data_umap_st_fun_bdy.push(json0);
				}
				st_umap_height_noleg_width(data_umap_st_fun_bdy,'bac_fun_color_bdy','Microbiota distribution',650);
				//volcano
				volcano_plot_bac_fun_diff_bdy(bac_fun_re,"bac_fun_gene_diff_bdy_volcano");
				//differ table
				var  path0=bac_table_dir+"/ST_fun_diff_bdy_table.txt";
				if ($.fn.dataTable.isDataTable('#bac_fun_bdy_diff_table')) {
					$('#bac_fun_bdy_diff_table').DataTable().clear().destroy();
				}
				bac_fun_diff_table(path0,"bac_fun_bdy_diff_table");
				//ssgsea 
				ssgsea_hetamap_pher_table("bdy",bac_fun_re,"bac_fun_heatmap_bdy","bac_fun_bdy_phyper_table");
			}else{
				//document.getElementById("bac_f_b").style.display="none";
				document.getElementById("bac_f_b").innerHTML="No result";
			}
		}else{
			//document.getElementById("bac_f_b").style.display="none";
			document.getElementById("bac_f_b").innerHTML="No result";
		}

}
function part4_bac_neb(bac_neb_re,data_umap_st_neb,webpath,bac_table_dir,metagenome_type_first,bac_select){
	//4.1 
		//4.1.1 H&E img
		//document.getElementById("base_spatial_HE_neb").src = webpath+"/HE.png";
		var img_dir='0_files/HE/'+dataSetID+'.png';
		document.getElementById("base_spatial_HE_neb").src = img_dir;
		$("#base_spatial_HE_neb").css("width",420);
		$("#base_spatial_HE_neb").css("height",420);
		//4.1.2
		st_umap_height(data_umap_st_neb,'base_spatial_neb',"Neighborhood",600);
		
		var y0=[];
		var types=bac_neb_re['cluster_name'].split(",");
		for(var i=0;i<types.length;i++){
			y0.push(Number(bac_neb_re["st_neb_"+types[i]+"_number"]));
		}

		plotly_barplot_neb2(types,y0,bac_neb_re['cluster_color'].split(","),'st_neb_stat_bar');
		//4.1.3
		//var oldTable = $('#st_marker_table_neb').dataTable();
		//oldTable.fnClearTable(); //清空一下table
		//oldTable.fnDestroy(); //还原初始化了的dataTable
		var neb_c=bac_neb_re['cluster_name'].split(",");
		var hide_neb_maker=[];
		for(var i=0;i<neb_c.length;i++){
			if(bac_neb_re[neb_c[i]+"_marker"]=="none"){
				hide_neb_maker.push("no");
			}else{
				hide_neb_maker.push("yes");
			}
		}if(hide_neb_maker.indexOf("yes")!=-1){
			document.getElementById("st_neb_marker_all").style.display="block";
			if ($.fn.dataTable.isDataTable('#st_marker_table_neb')) {
				$('#st_marker_table_neb').DataTable().clear().destroy();
			}
			marker_table_neb(webpath+"/ST_cluster_marker_neb_table.txt",'st_marker_table_neb');
			//4.1.4
			cluster_st_select_neb(bac_neb_re,'base_spatial_violin_neb_select','base_spatial_violin_marker_select','base_spatial_neb_violin');
		}else{
			document.getElementById("st_neb_marker_all").style.display="none";
		}
	//4.2
		bac_neb_xml_gene_st(bac_neb_re,'bac_neb_gene_xml_left','bac_neb_gene_color');
		
		st_umap_height(data_umap_st_neb,'bac_neb_org2',"Neighborhood",600);
		st_umap_height(data_umap_st_neb,'bac_neb_org',"Neighborhood",600);
		
		bac_neb_xml(bac_neb_re,bac_re,metagenome_type_first,'bac_neb_xml_left','bac_neb_xml_right','bac_neb_color','bac_neb_barplot_1',bac_select);
	//4.3
		Metagenome_xml('xml_bac_neb_diff',metagenome_type_first);
		var  path0=bac_table_dir+"/ST_neb_diff_"+metagenome_type_first+"_table.txt";
		
		if ($.fn.dataTable.isDataTable('#bac_neb_diff_table')) {
			$('#bac_neb_diff_table').DataTable().clear().destroy();
		}
		bac_neb_diff_table(path0,"bac_neb_diff_table");
		//plot
		volcano_plot_bac_beb_diff_all(metagenome_type_first,bac_neb_re,"volcano_Mal_Bdy","volcano_Bdy_nMal","volcano_Mal_nMal");
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
	bac_umap_width_height(data_umap_bac,'base_bac',metagenome_type,1000,700);
}

function bac_neb_colorPlot(bac_re,metagenome_type,metagenome_subtype,color_plot_div){
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
				

				
			}else{
				$("#"+color_plot_div).hide();
			}
				}
			}
	var param="metagenome_type="+metagenome_type+"&metagenome_subtype="+metagenome_subtype+"&dataSetID="+dataSetID;
	xmlHttp.open("get","MysqlExp.jsp?"+param,true);
	xmlHttp.send();
	
}
function gene_spatial_exp(svg0,div){
	//var slice_select0=overview_re.slice_first;
	var database_name=dataSetID+"_st".toLowerCase();

	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
				var color=jsonobj.exp.split(",");
				var slice_spot_name=slice_cluster_re["dev_spots"].split(",");
				var slice_spot_x=slice_cluster_re["spots_x"].split(",");
				var slice_spot_y=slice_cluster_re["spots_y"].split(",");
				plotly_svgSpotScatter(0.5,svg0,slice_spot_name,slice_spot_x,slice_spot_y,color,div);
				}
			}			
	var param="gene="+svg0+"&database_name="+database_name;
	xmlHttp.open("get","MysqlSpotExp.jsp?"+param,true);
	xmlHttp.send();
	////
}

function volcano_plot(data0,div,title0){
	var width0=$("#width_id").width()*0.3;
	$("#"+div).css("height",500);
	$("#"+div).css("width",width0);
	var chartDom = document.getElementById(div);
    var myChartPointDiff = echarts.init(chartDom);
    //myChartPointDiff.showLoading();
    option = {
		title: {
				text: title0,
				left: 'center',
				top: 0,
				//subtext:'hh'    
							},
      xAxis: {
        name:'Log2FC',
        nameLocation:'middle',
        min:-5,
        max:5,
        nameTextStyle: {
    		        fontSize: 16,
    		        align: "center",
    		        padding: [10,0, 0, 0]
    		      },
      },
      yAxis: {
		  //min:-2,
		  //max:5,
        name:'-Log10(P-Value)',
        nameLocation:'middle',
        nameTextStyle: {
    		        fontSize: 16,
    		        align: "center",
    		        padding: [10,0, 12, 0]
    		      },
      },
      legned:{},
      tooltip: {
          trigger: 'item',
          axisPointer: {
              type: 'cross'
          }
      },
      series: [
        {
          symbolSize: 10,
          data: data0,
          type: 'scatter',
          itemStyle: {
            normal: {
              color: function (params) {
                var value1 = params.value;
                if (value1[1] > 1.3) {
                  if (value1[0] > 0.58) {
                    return '#E1776C';//red
                  } else if (value1[0] < -0.58) {
                    return '#3487B6';//blue
                  }
                } else {
                  return 'grey';
                }
              }
            }
          },
          tooltip:{
              formatter:function(params){
                return [
                  'Name: '+params.data[2],
                  'LogFC: '+params.data[0],
                  '-Log10(P-value): '+params.data[1]
                  ].join('<br/>');
              }
            },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              {
                xAxis: -0.58
              },
              {
                xAxis: 0.58
              },
              {
                yAxis: 1.3
              }
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#000000'
                }
              }
            },
            silent: true
          },
        }
      ]
    };
    myChartPointDiff.setOption(option);
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

function plotly_barplot_neb(x,y,color,Name,div){
	var title0=Name;
	var width0=$("#width_id").width()*0.8;
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
	text1.push("Neighborhood: "+x[j]+" <br>"+"Abundance  : "+y[j]+"  ");
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
			  height: 650,
			  width:width0,
			  title: title0,
			  font: {size: 15}
			};
			Plotly.newPlot(div, data, layout);
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
function volcano_plot_bac_beb_diff_all(bac_t,bac_neb_re,div1,div2,div3){
	if(bac_neb_re[bac_t+"_type"].split(",").indexOf("Mal_Bdy")!=-1){
	//
	var data0=[];
	var logp0=bac_neb_re[bac_t+"_Mal_Bdy_logp"].split(",");
	var logfc0=bac_neb_re[bac_t+"_Mal_Bdy_logfc"].split(",");
	var name0=bac_neb_re[bac_t+"_Mal_Bdy_metagenome_type"].split(",");
	for(var i=0;i<name0.length;i++){
		var arr0=[];
		arr0.push(logfc0[i],logp0[i],name0[i]);
		data0.push(arr0);
	}
	volcano_plot(data0,div1,"Mal VS Bdy");
	}else{
		//document.getElementById("volcano_Mal_Bdy").style.display="none";
		document.getElementById("volcano_Mal_Bdy").innerHTML="No result";
	}
	if(bac_neb_re[bac_t+"_type"].split(",").indexOf("Bdy_nMal")!=-1){
	//
	var data0=[];
	var logp0=bac_neb_re[bac_t+"_Bdy_nMal_logp"].split(",");
	var logfc0=bac_neb_re[bac_t+"_Bdy_nMal_logfc"].split(",");
	var name0=bac_neb_re[bac_t+"_Bdy_nMal_metagenome_type"].split(",");
	for(var i=0;i<name0.length;i++){
		var arr0=[];
		arr0.push(logfc0[i],logp0[i],name0[i]);
		data0.push(arr0);
	}
	volcano_plot(data0,div2,"Bdy VS nMal");
	}else{
		//document.getElementById("volcano_Bdy_nMal").style.display="none";
		document.getElementById("volcano_Bdy_nMal").innerHTML="No result";
	}
	if(bac_neb_re[bac_t+"_type"].split(",").indexOf("Mal_nMal")!=-1){
	//
	var data0=[];
	var logp0=bac_neb_re[bac_t+"_Mal_nMal_logp"].split(",");
	var logfc0=bac_neb_re[bac_t+"_Mal_nMal_logfc"].split(",");
	var name0=bac_neb_re[bac_t+"_Mal_nMal_metagenome_type"].split(",");
	for(var i=0;i<name0.length;i++){
		var arr0=[];
		arr0.push(logfc0[i],logp0[i],name0[i]);
		data0.push(arr0);
	}
	volcano_plot(data0,div3,"Mal VS nMal");
	}else{
		//document.getElementById("volcano_Mal_nMal").style.display="none";
		document.getElementById("volcano_Mal_nMal").innerHTML="No result";
	}
}


function bac_neb_diff_table(path,div){
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
		"aaSorting": [[ 6, "desc" ]],
		'ordering'  :true,
		'ajax': path,
		//"columnDefs": [ {targets: 1, orderable: false, width: "10%"}, ] ,
		'columns':[
{'data':'metagenome_type'},
{'data':'mean_exp1'},
{'data':'mean_exp2'},
{'data':'LogFC'},
{'data':'Pvalue',render:$.fn_cut_num(4)},
{'data':'FDR',render:$.fn_cut_num(4)},
{'data':null,"render": function ( data, type, row, meta ) { 
	if(row['ComGroup']=='Mal_Bdy'){
		return "Mal vs Bdy";
	}
	if(row['ComGroup']=='Mal_nMal'){
		return "Mal vs nMal";
	}
	if(row['ComGroup']=='Bdy_nMal'){
		return "Bdy vs nMal";
	}
	
}}
]
		} );  
		} );
		
		$.fn_cut_num = function (cutoff) {
			return function (data, type, row) {
				if (type === 'display') {
					var str = data.toString(); // cast numbers
		
					return str.length < cutoff ?
						str :
						"<span title='" + str + "'>" + str.substr(0, cutoff - 1) + '&#8230;</span>';
				}
		
				// Search, order and type can use the original data
				return data;
			};
		};

}

function bac_neb_xml_right(bac_neb_re,bac_re,metagenome_type,div_right,color_plot_div,barplot_div,bac_select){
	var data_option=bac_re[metagenome_type+"_subclass"].split(",");
	var data_option_valuearray = [];
	if(data_option.indexOf(bac_select)==-1){
		bac_select=data_option[0];
	}
	var x0=bac_neb_re["cluster_name"].split(",");
	var color0=bac_neb_re["cluster_color"].split(",");
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
							bac_neb_colorPlot(bac_re,metagenome_type,metagenome0,color_plot_div);
							
							var y0=bac_neb_re[metagenome_type+"_"+metagenome0+"_neb_num"].split(",");
							plotly_barplot_neb(x0,y0,color0,metagenome0,barplot_div);
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
			bac_neb_colorPlot(bac_re,metagenome_type,bac_select,color_plot_div);
			
			var y0=bac_neb_re[metagenome_type+"_"+bac_select+"_neb_num"].split(",");
			plotly_barplot_neb(x0,y0,color0,bac_select,barplot_div);
			

}
function bac_neb_xml(bac_neb_re,bac_re,metagenome_type_first,div_left,div_right,color_plot_div,barplot_div,bac_select){
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
							bac_neb_xml_right(bac_neb_re,bac_re,metagenome_type0,div_right,color_plot_div,barplot_div,bac_select);
							
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
			bac_neb_xml_right(bac_neb_re,bac_re,metagenome_type_first,div_right,color_plot_div,barplot_div,bac_select);
			
			

}
function bac_neb_xml_gene_st(bac_neb_re,div_left,div_color){
	var data_option=bac_neb_re["st_all_genes"].split(",");
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
							var gene0=arr[0]["value"];
							///
							gene_spatial_exp(gene0,div_color);
							
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
			//
			gene_spatial_exp(data_option[0],div_color);
}

function cluster_st_select_neb(bac_neb_re,div,marker_selectDiv,violinDiv){
	var data_option=[];
	var neb_names=bac_neb_re['cluster_name'].split(",");
	for(var i=0;i<neb_names.length;i++){
		if(bac_neb_re[neb_names[i]+"_marker"] != "none"){
			data_option.push(neb_names[i]);
		}
	}
	if(data_option.length==0){
		document.getElementById(div).style.display="none";
		document.getElementById(marker_selectDiv).style.display="none";
		document.getElementById(violinDiv).style.display="none";
	}else{
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
							var Cluster0_marker_name =bac_neb_re[cluster0+"_marker"].split(",");
							marker_st_select_neb(Cluster0_marker_name[0],Cluster0_marker_name,marker_selectDiv,violinDiv);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: data_option[0], value: data_option[0]},
			])
			var Cluster0_marker_name =bac_neb_re[data_option[0]+"_marker"].split(",");
			marker_st_select_neb(Cluster0_marker_name[0],Cluster0_marker_name,marker_selectDiv,violinDiv);
	}
	
}
function marker_st_select_neb(marker_first,marker_name,div,violinDiv){
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
							
							violin_copy_gene_st_marker_neb(webpath,bac_neb_re,dataSetID,gene0,'st_neb',violinDiv);
							}
					})
					demo1_gene.update({
					data: data_option_valuearray
					})
		// 赋值
			demo1_gene.setValue([
			{name: marker_first, value: marker_first},
			])
			
			violin_copy_gene_st_marker_neb(webpath,bac_neb_re,dataSetID,marker_first,'st_neb',violinDiv);

}
function violin_copy_gene_st_marker_neb(webpath,bac_neb_re,dataset0,gene0,type0,div){
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
				
				celltype_all=bac_neb_re["cluster_name"].split(",");
				color_all=bac_neb_re["cluster_color"].split(",");
				
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
function marker_table_neb(path,div){
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
{'data':'cluster'},
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
function plotly_barplot_neb2(x,y,color,div){
	var title0="Neighborhood";
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
function st_umap_height(data,div,title0,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         //width: width,
	         font: {size: 15},
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


var xmSelectNeb = xmSelect.render({
	el: '#xml_neb',
	direction: 'down',//向上展开
	name: 'xml_neb',//表单的name属性
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
{name: 'Boundary', value: 'Boundary'},
{name: 'Malignant', value: 'Malignant',selected: true},
{name: 'Non-malignant', value: 'Non-malignant'},
	],
	on: function(data){//监听
		//arr:  
		var arr = data.arr;
		var change = data.change;
		//isAdd
		var isAdd = data.isAdd;
		var value0=arr[0]["value"];
		//
	}
})

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

							 //table
							 //var oldTable = $('#bac_neb_diff_table').dataTable();
							//oldTable.fnClearTable(); //清空一下table
							//oldTable.fnDestroy(); //还原初始化了的dataTable
							if ($.fn.dataTable.isDataTable('#bac_neb_diff_table')) {
										$('#bac_neb_diff_table').DataTable().clear().destroy();
									}
							var path0=bac_table_dir+"/ST_neb_diff_"+value0+"_table.txt";
							bac_neb_diff_table(path0,"bac_neb_diff_table");
							//plot
							volcano_plot_bac_beb_diff_all(value0,bac_neb_re,"volcano_Mal_Bdy","volcano_Bdy_nMal","volcano_Mal_nMal");
							
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
function st_umap_height_noleg_width(data,div,title0,height){
	var data=data;
	var div=div;
	var width0=$("#width_id").width()*0.5;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         width: width0,
	         font: {size: 15},
	        showlegend: false,
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
function volcano_plot_bac_fun_diff_bdy(bac_fun_re,div){
	var data0=[];
	var logp0=bac_fun_re["bdy_logp"].split(",");
	var logfc0=bac_fun_re["bdy_logfc"].split(",");
	var name0=bac_fun_re["bdy_genename"].split(",");
	for(var i=0;i<name0.length;i++){
		var arr0=[];
		arr0.push(logfc0[i],logp0[i],name0[i]);
		data0.push(arr0);
	}
	volcano_plot_width(data0,div,"Boundary",0.5);
}
function volcano_plot_width(data0,div,title0,width0){
	var width0=$("#width_id").width()*width0;
	$("#"+div).css("height",620);
	$("#"+div).css("width",width0);
	var chartDom = document.getElementById(div);
    var myChartPointDiff = echarts.init(chartDom);
    //myChartPointDiff.showLoading();
    option = {
		//title: {
		//		text: title0,
		//		left: 'center',
		//		top: 0,
				//subtext:'hh'    
		//					},
      xAxis: {
        name:'Log2FC',
        nameLocation:'middle',
        min:-5,
        max:5,
        nameTextStyle: {
    		        fontSize: 16,
    		        align: "center",
    		        padding: [10,0, 0, 0]
    		      },
      },
      yAxis: {
		  //min:-2,
		  //max:5,
        name:'-Log10(P-Value)',
        nameLocation:'middle',
        nameTextStyle: {
    		        fontSize: 16,
    		        align: "center",
    		        padding: [0,0, 12, 0]
    		      },
      },
      legned:{},
      tooltip: {
          trigger: 'item',
          axisPointer: {
              type: 'cross'
          }
      },
      series: [
        {
          symbolSize: 10,
          data: data0,
          type: 'scatter',
          itemStyle: {
            normal: {
              color: function (params) {
                var value1 = params.value;
                if (value1[1] > 1.3) {
                  if (value1[0] > 0.58) {
                    return '#E1776C';//red
                  } else if (value1[0] < -0.58) {
                    return '#3487B6';//blue
                  }
                } else {
                  return 'grey';
                }
              }
            }
          },
          tooltip:{
              formatter:function(params){
                return [
                  'Name: '+params.data[2],
                  'LogFC: '+params.data[0],
                  '-Log10(P-value): '+params.data[1]
                  ].join('<br/>');
              }
            },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              {
                xAxis: -0.58
              },
              {
                xAxis: 0.58
              },
              {
                yAxis: 1.3
              }
            ],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#000000'
                }
              }
            },
            silent: true
          },
        }
      ]
    };
    myChartPointDiff.setOption(option);
}

function ssgsea_hetamap_pher_table(type0,bac_fun_re,divplot,divtable){
	if ($.fn.dataTable.isDataTable('#'+divtable)) {
		$('#'+divtable).DataTable().clear().destroy();
	}
	if(type0=="mal"){
		bacFunctionTable(bac_table_dir+"/ST_fun_phyper_mal_table.txt",divtable);
	}else{
		bacFunctionTable(bac_table_dir+"/ST_fun_phyper_bdy_table.txt",divtable);
	}
	var x_value=bac_fun_re[type0+"_x"].split(",");
		var y_value=bac_fun_re[type0+"_y"].split(",");
		var sig_pair=bac_fun_re[type0+"_sig_pair"].split(";");
		var z_all=bac_fun_re[type0+"_z"].split(",");
		var z_value=[];
		z_value.push(z_all);
		var hover_text=[];
		var h0=[];
		for (var hh=0;hh<z_all.length;hh++){
				h0.push(" Cell Type : "+y_value[0]+" <br>"+" Pathway : "+x_value[hh]+" <br>"+" ssGSEA Score : "+z_all[hh]+" ");
		}
		hover_text.push(h0);
		var title1="ssGSEA probability scores";

	Co_Occ_heatmap_havesig(title1,divplot,x_value,y_value,z_value,sig_pair,hover_text,0.95);
	
	
}

function Co_Occ_heatmap_havesig(title,div,x_value,y_value,z_value,sig_pair,hover_text,width0){

   var width0=$("#width_id").width()*width0;
   var xValues = x_value;
   var yValues = y_value;
   var zValues = z_value;
//console.log(value_min+"   "+value_max+"hhh");
   var colorscaleValue = [
                        [0,'#0033ff'],//99ccff
                        [0.5,'#FFFFFF'],
                        [1,'#bd2130']
   ];
   var data = [{
     x: xValues,
     y: yValues,
     z: zValues,
     type: 'heatmap',
     //hovertext :hover_text,
     //hoverinfo :"text",
     colorscale: colorscaleValue,
     automargin:true,
     showscale: true
     
   }
   ];
   
   var layout = {
		height:300,
		width:width0,
		showlegend: false,
   		margin: {"t": 80, "b": 80, "l": 50, "r": 100}, //饼图边缘距离画布上下左右边界的距离，单位px
     //title: title,
     font: {size: 8},
     annotations: [],
     xaxis: {
       ticks: '',
       showticklabels: false,
     },
     yaxis: {
       ticks: '',
       ticksuffix: ' ',
       showticklabels: false,
       autosize: false
     }
   };

   for ( var i = 0; i < yValues.length; i++ ) {
     for ( var j = 0; j < xValues.length; j++ ) {
    	 var currentValue = yValues[i]+","+xValues[j];
       if (sig_pair.includes(currentValue)) {
         var textColor = 'white';
       var result = {
         xref: 'x1',
         yref: 'y1',
         x: xValues[j],
         y: yValues[i],
         text: '*',
         font: {
           family: 'Arial',
           size: 12,
           color: 'rgb(50, 171, 96)'
         },
         showarrow: false,
         font: {
           color: textColor
         }
       };
       }
       layout.annotations.push(result);
      
     }
   }

   Plotly.newPlot(div, data, layout);
}
function st_umap_height_noleg(data,div,title0,height){
	var data=data;
	var div=div;
	var myPlot = document.getElementById(div);
	var layout = {
	         height: height,
	         //width: width,
	         font: {size: 15},
	        showlegend: false,
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
function volcano_plot_bac_fun_diff_mal(bac_fun_re,div){
	var data0=[];
	var logp0=bac_fun_re["mal_logp"].split(",");
	var logfc0=bac_fun_re["mal_logfc"].split(",");
	var name0=bac_fun_re["mal_genename"].split(",");
	for(var i=0;i<name0.length;i++){
		var arr0=[];
		arr0.push(logfc0[i],logp0[i],name0[i]);
		data0.push(arr0);
	}
	volcano_plot_width(data0,div,"Malignant",0.5);
}

function bacFunctionTable(path,div){
	var path=path;
	var div='#'+div;
	$(document).ready(function() {												
		$(div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
		"searching":false,
		"deferRender": true,//big data
		"bProcessing": true, //显示是否加载 
		"paginationType": "full_numbers",//详细分页组，可以支持直接跳转到某页 
		"serverSide": false,      //后台处理分页则为true  
		'ajax': path,
		'columns':[
		{'data':'Pathway'},
		{'data':'gsvaScor'},
		{'data':'pValue'},
		{'data':'FDR'},
		{'data':'Genes',
			render: $.fn.enrich(3)}
		]
		} );
		} );
	//返回部分值，按照逗号分隔的并且
	$.fn.enrich = function (cutoff) {
			return function (data, type, row) {
			if (type === 'display') {
				var str = data.toString(); // cast numbers
				var strArr=str.split(",")
				return strArr.length < cutoff ?
					strArr :
						"<span  title='" + str + "'>" + strArr.slice(0,3).join() + '&#8230;</span>';
						}
						return data;
						};
						};
	//超过长度的鼠标放上显示全部
		$.fn.dataTable.render.ellipsis = function (cutoff) {
			return function (data, type, row) {
				if (type === 'display') {
					var str = data.toString(); // cast numbers
		
					return str.length < cutoff ?
						str :
						"<span title='" + str + "'>" + str.substr(0, cutoff - 1) + '&#8230;</span>';
				}
		
				// Search, order and type can use the original data
				return data;
			};
		};
}




function bac_fun_diff_table(path,div){
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
		"aaSorting": [[ 3, "desc" ]],
		'ordering'  :true,
		'ajax': path,
		//"columnDefs": [ {targets: 1, orderable: false, width: "10%"}, ] ,
		'columns':[
{'data':'Gene'},
{'data':'Mean_With'},
{'data':'Mean_Without'},
{'data':'LogFC'},
{'data':'Pvalue',render:$.fn_cut_num2(4)},
{'data':'FDR',render:$.fn_cut_num2(4)},
{'data':null,"render": function ( data, type, row, meta ) { 
	if(row['Label']=='With_up'){
		return "Up";
	}
	if(row['Label']=='With_down'){
		return "Down";
	}
	if(row['Label']=='Stable'){
		return "Stable";
	}
	
}}
					]
		} );  
		} );
$.fn_cut_num2 = function (cutoff) {
			return function (data, type, row) {
				if (type === 'display') {
					var str = data.toString(); // cast numbers
		
					return str.length < cutoff ?
						str :
						"<span title='" + str + "'>" + str.substr(0, cutoff - 1) + '&#8230;</span>';
				}
		
				// Search, order and type can use the original data
				return data;
			};
		};
}



