path_file='0_files/browseFile/sub_cancer_table';
innerpath="0_files/innerpath";

search_cluster_UI="";
$.ajaxSettings.async = false;
$.getJSON(innerpath+"/search_cluster_UI.txt", "", function(data_re) {
	search_cluster_UI=data_re;
});


function example_bac(key){
	document.getElementById("datasets").value=key.split(",")[1];
	dasetsSearch_bac();
}
var xmSelectBac = xmSelect.render({
	el: '#xml_bac',
	direction: 'down',//向上展开
	name: 'xml_bac',//表单的name属性
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
		//arr:  当前多选已选中的数据
		var arr = data.arr;
		var change = data.change;
		//isAdd, 此次操作是新增还是删除
		var isAdd = data.isAdd;
		var value0=arr[0]["value"];
		//自动补全位置
		var availableTags=search_cluster_UI[value0].split(",");
		$("#datasets").autocomplete({
	       source: availableTags,
	       minLength: 1
	      });
	}
})

function dasetsSearch_bac(){
	var key=document.getElementById("datasets").value;
	var searchType="search_bac";
	key=$.trim(key);
	if(key.length==0){
		alert("INPUT A KEY WROLD FIRST !");
		return false;
	}
	var metagenome = xmSelect.get('#xml_bac', true).getValue('valueStr');
	if(metagenome.length==0){
		alert("SELECT A METAGENOME FIRST !");
		return false;
	}
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			//$("#loading").hide();
			if(jsonobj.error_attention=="no"){
				
				document.getElementById("browse_sub_father_bac").style.display="block";
				if ($.fn.dataTable.isDataTable('#browse_sub_table_bac')) {
				$('#browse_sub_table_bac').DataTable().clear().destroy();
				}
				browseSubTable_gene("0_files/search_bac.txt",key,'browse_sub_table_bac');
				
			}else{
				alert("NO RESULT !");
				return false;
			}
				}
			}

	var param="key="+key+"&searchType="+searchType+"&metagenome="+metagenome;
	xmlHttp.open("get","MysqlFuzzyMatching.jsp?"+param,true);
	xmlHttp.send();
}




function browseSubTable_gene(path,gene,div){
//	var table_inner='<thead ><tr><th>Cancer</th><th>Tissue</th><th>Technology </th><th>Section</th><th>No. of Spot </th><th>No. of Gene</th><th>No. of Marker</th><th>Publication</th><th>Detail</th></tr></thead>';
//	document.getElementById("browse_sub_table").innerHTML=table_inner;
	var path=path;
	$(document).ready(function() {
		$("#"+div).DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
        "aLengthMenu": [5,10,20],//设置每页显示数据条数的下拉选项
        'iDisplayLength': 5, //每页初始显示5条记录
		"deferRender": true,
		"searching" : false,
		"bProcessing": true, 
		"paginationType": "full_numbers",
		"serverSide": false, 
		"order": [[ 0, 'asc' ]],
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
		{'data':'bac_num'},
		{'data':'spot_num'},
		//{'data':'cell_num'},
		{'data':'celltype_num'},

		{'data':null,
    		"render": function ( data, type, row, meta ) {  
    		return  "<a target='_blank' href='"+row['paper_http']+"'> <i class='fa-solid fa-link' style='font-size:16px;color:#ff9a18' aria-hidden='true'   ></i> "+row['publication']+"</a> ";
    		}
    		},
		{'data':null,
		"render": function ( data, type, row, meta ) {  
		return "<a target='_blank' href=SearchDetail.jsp?dataSetID="+row['dataset_id']+"&species="+row['species']+">" +"<i class='fa fa-share' aria-hidden='true' style='font-size:15px;color:#ff9a18;'></i></a>";  
								                    }
		}
		]
		} );  
		} );
}



function browseSubTable(path){
//	var table_inner='<thead ><tr><th>Cancer</th><th>Tissue</th><th>Technology </th><th>Section</th><th>No. of Spot </th><th>No. of Gene</th><th>No. of Marker</th><th>Publication</th><th>Detail</th></tr></thead>';
//	document.getElementById("browse_sub_table").innerHTML=table_inner;
	var path=path;
	$(document).ready(function() {
		$("#browse_sub_table").DataTable( {
		"bLengthChange": false, //开关，是否显示每页显示多少条数据的下拉框
        "aLengthMenu": [5,10,20],//设置每页显示数据条数的下拉选项
        'iDisplayLength': 5, //每页初始显示5条记录
		"deferRender": true,
		"bProcessing": true, 
		"paginationType": "full_numbers",
		"serverSide": false, 
		"order": [[ 0, 'desc' ]],
		'ajax': path,
		'columns':[
		{'data':'cancer'},
		{'data':null,
							"render": function ( data, type, row, meta ) { 
								var str=row['tissue'];
								return str.length < 15 ?
										str :
										"<span title='" + str + "'>" + str.substr(0, 14) + '&#8230;</span>';
							}},
		{'data':'technology'},
		{'data':'slice',
		"render": function ( data, type, row, meta ) {  
			if(row['slice']=="full"){
				me="All slices";
			}else{
				me=row['slice'];
			}
			return me ;}},
		{'data':'spot_num'},
		{'data':'slice_gene_num'},
		{'data':'marker_cluster_num'},
		{'data':null,
    		"render": function ( data, type, row, meta ) {  
    		return  "<a   target='_blank' href='"+row['paper_http']+"'> <i class='fa-solid fa-link' style='font-size:16px;color:#ff9a18' aria-hidden='true'   ></i> "+row['paper']+"</a> ";
    		}
    		},
		{'data':null,
		"render": function ( data, type, row, meta ) {  
		return "<a target='_blank' href=DatesetDetail.jsp?dataSetID="+row['dataset_slice'].split(",")[0]+"&SliceInfor="+row['slice']+">" +"<i class='fa fa-share' aria-hidden='true' style='font-size:15px;'></i></a>";  
								                    }
		}
		]
		} );  
		} );
}

///////////////////////// search cancer////////////////
function example_cancer(key){
	document.getElementById("datasets_cancer").value=key;
	dasetsSearch_cancer();
}


function dasetsSearch_cancer(){
	var key=document.getElementById("datasets_cancer").value.split("(")[1];
	key=key.substr(0,key.length-1);
	
	alert(key);
	var searchType="search_cancer";
	key=$.trim(key);
	if(key.length==0){
		alert("INPUT A KEY WROLD FIRST !");
		return false;
	}
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			//$("#loading").hide();
			if(jsonobj.error_attention=="no"){
				////
				
				document.getElementById("browse_sub_father_cancer").style.display="block";
				if ($.fn.dataTable.isDataTable('#browse_sub_table_cancer')) {
				$('#browse_sub_table_cancer').DataTable().clear().destroy();
				}
				
				browseSubTable_gene("0_files/search_cancer.txt",key,'browse_sub_table_cancer');
				
			}else{
				alert("NO RESULT !");
				return false;
			}
				}
			}

	var param="key="+key+"&searchType="+searchType;
	xmlHttp.open("get","MysqlFuzzyMatching.jsp?"+param,true);
	xmlHttp.send();
}

///////////////////////// search celltype////////////////
function example_ct(key){
	document.getElementById("datasets_ct").value=key;
	dasetsSearch_ct();
}

function dasetsSearch_ct(){
	var key=document.getElementById("datasets_ct").value.split("(")[1];
	key=key.substr(0,key.length-1);
	
	var searchType="search_celltype";
	key=$.trim(key);
	if(key.length==0){
		alert("INPUT A KEY WROLD FIRST !");
		return false;
	}
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			//$("#loading").hide();
			if(jsonobj.error_attention=="no"){
				////
				document.getElementById("browse_sub_father_ct").style.display="block";
				if ($.fn.dataTable.isDataTable('#browse_sub_table_ct')) {
				$('#browse_sub_table_ct').DataTable().clear().destroy();
				}
				
				browseSubTable_gene("0_files/search_celltype.txt",key,'browse_sub_table_ct');
				
			}else{
				alert("NO RESULT !");
				return false;
			}
				}
			}

	var param="key="+key+"&searchType="+searchType;
	xmlHttp.open("get","MysqlFuzzyMatching.jsp?"+param,true);
	xmlHttp.send();
}

///////////////////////// search gene////////////////


function example_gene(key){
	document.getElementById("datasets_gene").value=key;
	dasetsSearch_gene();
}

function dasetsSearch_gene(){
	var key=document.getElementById("datasets_gene").value;
	var searchType="search_gene";
	key=$.trim(key);
	if(key.length==0){
		alert("INPUT A KEY WROLD FIRST !");
		return false;
	}
	var xmlHttp=new XMLHttpRequest();
	xmlHttp.onreadystatechange =function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			var returnData=xmlHttp.responseText;
			var jsonobj=JSON.parse(returnData);
			//$("#loading").hide();
			if(jsonobj.error_attention=="no"){
				////
				document.getElementById("browse_sub_father_gene").style.display="block";
				if ($.fn.dataTable.isDataTable('#browse_sub_table_gene')) {
				$('#browse_sub_table_gene').DataTable().clear().destroy();
				}
				
				browseSubTable_gene("0_files/search_gene.txt",key,'browse_sub_table_gene');
				
			}else{
				alert("NO RESULT !");
				return false;
			}
				}
			}

	var param="key="+key+"&searchType="+searchType;
	xmlHttp.open("get","MysqlFuzzyMatching.jsp?"+param,true);
	xmlHttp.send();
}

$(document).ready(function() {
var availableTags_f=["Head and neck squamous carcinoma (HNSCC)","Plexiform Neurofibroma (PN)","Oral squamous cell carcinoma (OSCC)","Lung adenocarcinoma (LUAD)","Liver hepatocellular carcinoma (LIHC)","Pancreatic Ductal Adenocarcinoma (PDAC)","Primary endometrial carcinoma (EC)","Muscle-invasive Bladder Cancer(MIBC)","Cutaneous Squamous Cell Carcinoma (CSCC)","Glioblastoma (GBM)","Head and Neck Angiosarcoma (HN-AS)","intraductal papillary mucinous neoplasms (IPMN)","Breast Cancer (BRCA)","Gastrointestinal Stromal Tumor (GIST)","Colorectal Cancer (CRC)","Renal cell carcinoma (RCC)","Ovarian carcinoma (OV)","Melanoma (SKCM)"];
	$("#datasets_cancer").autocomplete({
	       source: availableTags_f,
	       minLength: 1
	      });

	});



//datasets_ct

$(document).ready(function() {
var availableTags_c=["active dendritic cell (aDC)","follicular B cell(B-Fol)","B lymphocyte (B-Lym)","memory B cell (B-Mem)","naive B cell(B-Nai)","T-Mem memory CD4+ T cell(CD4+ T-Mem)","CD4+ T cell(CD4+ T)","naive CD4+ T cell(CD4+ T-Nai)","CD8+ T cell(CD8+ T)","effector CD8+ T cell(CD8+ T-Eff)","memory CD8+ T cell(CD8+ T-Mem)","conventional type 1 dendritic cell(cDC1)","conventional type 2 dendritic cell(cDC2)","dendritic cell(DC)","Endothelial cell(Endothelial)","Epithelial cell (Epithelial)","Fibroblasts cell (Fibroblasts)","germinal center B cell in the dark zone(GC B-DZ)","Macrophage cell (macrophage)","mast cell(MAST)","Monocyte cell (monocyte)","Neutrophil cell (neutrophil)","natural killer cell (NK)","plasmacytoid dendritic cell (pDC)","plasma cell (Plasma)","cytotoxic T cell (T-Cyt)","exhausted T cell (T-Exh)","follicular T helper cell (T-FH)", "T helper type 17 cell (Th17)","T lymphocyte (T-Lym)","naive T cell (T-Nai)","regulatory T cell (T-Reg)","Tumor cell (tumor)"];
	$("#datasets_ct").autocomplete({
	       source: availableTags_c,
	       minLength: 1
	      });

	});

$(document).ready(function() {
var availableTags=search_cluster_UI['genus'].split(",");
	$("#datasets").autocomplete({
	       source: availableTags,
	       minLength: 1
	      });

	});