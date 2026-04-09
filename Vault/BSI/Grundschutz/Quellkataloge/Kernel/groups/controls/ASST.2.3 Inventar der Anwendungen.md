---
tags: Inventories
class: BSI-Stand-der-Technik-Kernel
type: control
control: ASST.2.3 Inventar der Anwendungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ASST.2.3 - Inventar der Anwendungen
Tags: "[Inventories](tags_Inventories)"
Gruppe: [ASST.2 Inventarisierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST.2%20Inventarisierung.md)
---

> [!info]- Untergeordnete Controls
> [ASST.2.3.1 Autorisierung von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ASST.2.3.1%20Autorisierung%20von%20Anwendungen.md)> [ASST.2.3.2 Software Bill of Materials (SBOM)](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ASST.2.3.2%20Software%20Bill%20of%20Materials%20(SBOM).md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Informationen und Assets (ASST)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST%20Informationen%20und%20Assets.md)**<br> ***  &rarr; [Inventarisierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/ASST.2%20Inventarisierung.md) *** |  | SOLLTE | ein Inventar der Anwendungen | einschließlich Produktname, Versionsstand, Herkunft und Lizenzierung | dokumentieren | Inventar Anwendungen | >Informationen und Assets SOLLTE ein Inventar der Anwendungen einschließlich Produktname, Versionsstand, Herkunft und Lizenzierung dokumentieren.

> [!info]- Guidance
>Ein zentrales Inventar der Anwendungen, oft auch als Application Inventory oder Teil des Software Asset Management (SAM) bezeichnet, dient als grundlegende, strukturierte Übersicht aller in der Institution eingesetzten Applikationen. Relevant sind dabei sowohl lokal installierte Anwendungen, als auch solche, die auf Cloud-Servern oder in verteilten Diensten betrieben werden. Hierbei beschreibt die Herkunft nicht nur den Hersteller, sondern auch den Lieferanten oder die Bezugsquelle, um die Vertrauenswürdigkeit bewerten zu können. Die Lizensierung erfasst die rechtliche Grundlage für die Nutzung, einschließlich des Lizenzmodells (z.B. pro Benutzer, pro Gerät, Abonnement), der Anzahl erworbener Lizenzen und deren Gültigkeitsdauer. Häufig sind weitere Angaben sinnvoll, z.B. Beschaffungs- und Installationszeitpunkt, URL, App-Store, Schnittstellen wie z.B. Cloud-APIs oder Datenexporte in andere Anwendungen, auch auf Dateiserver. Ohne eine solche Übersicht könnte die Institution unwissentlich Software mit bekannten, kritischen Schwachstellen einsetzen oder durch den Einsatz nicht lizenzierter Produkte hohe finanzielle und rechtliche Risiken eingehen. Ein gepflegtes Inventar kann hingegen bei neuen Sicherheitswarnungen eine schnelle Auswirkungsanalyse ermöglichen. Zur praktischen Umsetzung kann die Institution eine zentrale Liste, beispielsweise in einer Datenbank oder einem spezialisierten SAM-Tool, aufbauen, die durch verschiedene Quellen gespeist wird. Eine automatisierte Erfassung kann durch technische Werkzeuge erfolgen, wie zum Beispiel durch (1) Netzwerks-Scanner, die installierte Applikationen auf Endgeräten identifizieren, (2) Agenten-basierte Systeme, die kontinuierlich Software-Änderungen melden, oder (3) die Auswertung von Daten aus zentralen Software-Verteilungssystemen. Die Dokumentation kann auch durch eine Liste mit Verweisen umgesetzt werden (z.B. auf die Lizendateien und Schnittstellenkonfiguration).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d55d7e49-436e-4783-9ad0-5f92619da743 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | d55d7e49-436e-4783-9ad0-5f92619da743 |
