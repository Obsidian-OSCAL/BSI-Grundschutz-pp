---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.7.2 Zertifikatsmonitoring
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.7.2 - Zertifikatsmonitoring
Gruppe: [DEV.7 Bereitstellung und Betrieb](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.7%20Bereitstellung%20und%20Betrieb.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Bereitstellung und Betrieb](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.7%20Bereitstellung%20und%20Betrieb.md) *** | Anwendungen | SOLLTE | die Ausstellung neuer Zertifikate | für die von der Anwendung verwendeten Domains | überwachen | Detektions-Konzept | >Entwicklung für Anwendungen SOLLTE die Ausstellung neuer Zertifikate für die von der Anwendung verwendeten Domains überwachen.

> [!info]- Guidance
>Anwendungen die über das Netz kommunizieren nutzen typischerweise X.509-Zertifikate zur Authentifizierung (z.B. per TLS). Die Ausstellung neuer Zertifikate bei Zertifizierungsstellen kann ein Angriffsversuch Dritter sein, die vorgeben wollen die Anwendung zu betreiben. Dies kann mittels Certificate Transparency automatisiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 61b03a52-d68e-4bda-b715-91cac2e70e87 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 61b03a52-d68e-4bda-b715-91cac2e70e87 |
