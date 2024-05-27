
datasetTable();



function datasetTable(){
    $(document).ready(function() {
        var table = $('#download_Table').DataTable( {
        	"bLengthChange": false,
        	"searching":false,
            "ajax": "0_files/innerpath/download_file.txt",
            "columns": [
                {
                    "class":'details-control',
                    "orderable":false,
                    "data":null,
                    "defaultContent": ''
                },
                { "data": "cancer" },
				{ "data": "sample" },
				{ "data": "bac_num" },
                {'data':null,
            		"render": function ( data, type, row, meta ) {  
            		return  "<a style='font-size:16px;cursor: pointer;'  target='_blank' href='"+row['paper_html']+"'> <i class='fa-solid fa-link' aria-hidden='true' style='color:#ff9a18;'  ></i> "+row['paper']+"</a> ";
            								                    }//data是对应当前cell的值，row是对应当前行中的所有cell的值
            		}
            ],
            "order": [[1, 'asc']]
        } );
        // Add event listener for opening and closing details
        $('#download_Table tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row( tr );
            if ( row.child.isShown() ) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                row.child( format_unpup(row.data()) ).show();
                tr.addClass('shown');
            }
        } );
    } );
}


function format ( d ) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;width:100%;">'+
            '<tr>'+
                '<td>Annotation of spots in slice</td>'+
                '<td>Tumor_spots_annotation.txt</td>'+
                '<td> <a href="downloadCopy.jsp?filename='+d.spot_anno_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
            '<tr>'+
	            '<td>Marker for clusters in slice</td>'+
	            '<td>Tumor_spots_cluster_marker.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.spot_anno_marker_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
            '<tr>'+
	            '<td>Spatial spot deconvolution data</td>'+
	            '<td>Tumor_spot_deconvolution.txt.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.spot_dev_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        	'</tr>'+
        	'<tr>'+
	            '<td>Spatial spot SVG data</td>'+
	            '<td>Tumor_spot_SVG.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.spot_svg_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        	'</tr>'+
        	'<tr>'+
	            '<td>Co-expression of gene modules in slices</td>'+
	            '<td>Tumor_Co-expression_modules.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.spot_spatial_module_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
	        '</tr>'+
            '<tr>'+
	            '<td>Distribution of bacteria in slices</td>'+
	            '<td>Tumor_bacteria_distribution.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.bac_distribution_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Expression  of bacteria in slices</td>'+
	            '<td>Tumor_bacteria_expression.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.bac_exp_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Spatial neighborhood in slices</td>'+
	            '<td>Spatial_neighborhood.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.neb_infor_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Marker for spatial neighborhoods in slices</td>'+
	            '<td>Spatial_neighborhood_marker.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.neb_marker_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Bacteria with differences in spatial neighborhoods in slices</td>'+
	            '<td>Spatial_neighborhood_bacteria.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.neb_bac_differ_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Function of malignant regions in slices </td>'+
	            '<td>Malignant_function.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.mal_bac_function_hallmarker_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Function of boundary regions in slices</td>'+
	            '<td>Boundary_function.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.bdy_bac_function_imm_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Composition of cell types in the bacterial enrichment spot</td>'+
	            '<td>Bacteria_spot_celltype.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.bac_high_celltype_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Co-expression of bacteria and gene in slices</td>'+
	            '<td>Co-expression_bacteria_gene.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.bac_gene_module_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Paired/high quality scRNA-seq data</td>'+
	            '<td>scRNA-seq.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.sc_exp_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>Paired/high quality scRNA-seq cell type</td>'+
	            '<td>scRNA-seq_celltype.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.sc_celltype_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			'<tr>'+
	            '<td>ST data</td>'+
	            '<td>ST.txt</td>'+
	            '<td> <a href="downloadCopy.jsp?filename='+d.st_exp_file+'&loc='+d.datasetID+'"> <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
            '</tr>'+
			
        '</table>';
    }


function format_unpup ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;width:100%;">'+
        '<tr>'+
            '<td>Annotation of spots in slice</td>'+
            '<td>Tumor_spots_annotation.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
        '<tr>'+
            '<td>Marker for clusters in slice</td>'+
            '<td>Tumor_spots_cluster_marker.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
        '<tr>'+
            '<td>Spatial spot deconvolution data</td>'+
            '<td>Tumor_spot_deconvolution.txt.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
    	'</tr>'+
    	'<tr>'+
            '<td>Spatial spot SVG data</td>'+
            '<td>Tumor_spot_SVG.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
    	'</tr>'+
    	'<tr>'+
            '<td>Co-expression of gene modules in slices</td>'+
            '<td>Tumor_Co-expression_modules.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
        '<tr>'+
            '<td>Distribution of bacteria in slices</td>'+
            '<td>Tumor_bacteria_distribution.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Expression  of bacteria in slices</td>'+
            '<td>Tumor_bacteria_expression.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Spatial neighborhood in slices</td>'+
            '<td>Spatial_neighborhood.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Marker for spatial neighborhoods in slices</td>'+
            '<td>Spatial_neighborhood_marker.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Bacteria with differences in spatial neighborhoods in slices</td>'+
            '<td>Spatial_neighborhood_bacteria.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Function of malignant regions in slices </td>'+
            '<td>Malignant_function.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Function of boundary regions in slices</td>'+
            '<td>Boundary_function.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Composition of cell types in the bacterial enrichment spot</td>'+
            '<td>Bacteria_spot_celltype.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Co-expression of bacteria and gene in slices</td>'+
            '<td>Co-expression_bacteria_gene.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Paired/high quality scRNA-seq data</td>'+
            '<td>scRNA-seq.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>Paired/high quality scRNA-seq cell type</td>'+
            '<td>scRNA-seq_celltype.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		'<tr>'+
            '<td>ST data</td>'+
            '<td>ST.txt</td>'+
            '<td> <a href="" onclick= "'+'infor_alert()" > <i class="fa fa-download" style="font-size:20px;color:#ff9a18"></i></a> </td>'+
        '</tr>'+
		
    '</table>';
}


function infor_alert(){
	alert('The data will be made available for download upon publication.');
	return false;
}