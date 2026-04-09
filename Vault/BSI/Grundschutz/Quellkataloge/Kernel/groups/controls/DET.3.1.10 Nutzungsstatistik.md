---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.10 Nutzungsstatistik
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.10 - Nutzungsstatistik
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md) *** | Anwendungen | KANN | eine Nutzungsstatistik |  | protokollieren | Audit Log | >Detektion für Anwendungen KANN eine Nutzungsstatistik protokollieren.

> [!info]- Guidance
>Bei der statistischen Protokollierung werden z.B. Anzahl oder Durchschnittswerte gespeichert, nicht jedoch die genaue Herkunft oder der Zeitstempel bestimmter Ereignisse. Nutzungsstatistiken wahren die Privatsphäre der einzelnen Nutzenden, ermöglichen jedoch eine Erkennung von Fehlern oder Anomalien in der Nutzung. Beispiele sind die Anzahl von Anfragen für eine bestimmte Ressource (etwa Webserver-URL oder DNS-Name), Anzahl der Anfragen einer bestimmten Anfrageart, Geräte- oder Anwendungskategorien (etwa pro Browseragent oder Betriebssystemversion), Anzahl bestimmter Antworttypen (z.B. Webserver-Fehlercodes), sowie Zugriffsversuche. Hierdurch können Betriebsprobleme wie Caching Fehler oder DoS-Angriffe erkannt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | bcc48221-ad2b-4989-a754-23a167a08176 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | bcc48221-ad2b-4989-a754-23a167a08176 |
