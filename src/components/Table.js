import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
	render() {
		return (
			<table className="mesa">
				<tr>
					<th>File(s)</th>
					<th>Desc</th>
					<th>Updated</th>
				</tr>
				<tr>
					<td><img src={"images/folder-icon.png"}/>build</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td>6 weeks ago</td>
				</tr>
				<tr>
					<td><img src={"images/folder-icon.png"}/>docs</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td> 4 months ago</td>
				</tr>
				<tr>
					<td><img src={"images/folder-icon.png"}/>logo</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td>3 years ago</td>
				</tr>
				<tr>
					<td><img src={"images/folder-icon.png"}/>src</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td> 4 months ago</td>
				</tr>
				<tr>
					<td><img src={"images/folder-icon.png"}/>test</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td> 4 months ago</td>
				</tr>
				<tr>
					<td><img src={"images/file-icon.png"}/>.babelrc</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td> 4 months ago</td>
				</tr>
				<tr>
					<td><img src={"images/file-icon.png"}/>.editorconfig</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td> 4 months ago</td>
				</tr>
				<tr>
					<td><img src={"images/file-icon.png"}/>.eslintignore</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td> 4 months ago</td>
				</tr>
				<tr>
					<td><img src={"images/file-icon.png"}/>.eslintrc</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td> 4 months ago</td>
				</tr>
				<tr>
					<td><img src={"images/file-icon.png"}/>.flowconfig</td>
					<td>In aliquet faucibus porttitor. Suspendisse ac imperdiet massa. Maecenas sed imperdiet sem. Aenean volutpat mi facilisis accumsan iaculis. Integer facilisis risus sed imperdiet elementum. Nullam sit amet aliquet ipsum, quis hendrerit nunc. Nunc vel arcu id purus sagittis efficitur non ut purus. Integer ut pharetra turpis. Etiam rutrum laoreet lectus nec vestibulum.</td>
					<td> 4 months ago</td>
				</tr>
			</table>
		);
	}
}

export default Table;