package main

import (
    "fmt"
    "time"
    "flag"
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "bouldering/web"
)

var dir string = "."
var port string = "8090"
func main() {
    flag.StringVar(&dir, "dir", dir, "Directory to serve files from")
    flag.StringVar(&port, "port", port, "Port to run the webserver.")
    flag.Parse()

    fmt.Println("Using this directory As the static root: ", dir, port, "WAT")

    router := mux.NewRouter()
	web.SetupContented(router, dir)
	web.SetupStatic(router, "./static")

    // Good practice: enforce timeouts for servers you create!
    srv := &http.Server{
        Handler:      router,
	Addr:         ":" + port,
	WriteTimeout: 18 * time.Second,
	ReadTimeout:  18 * time.Second,
    }
    log.Fatal(srv.ListenAndServe())
    http.Handle("/", router)
}

