---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.8 Inspektion verschlüsselter Verbindungen
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.8 - Inspektion verschlüsselter Verbindungen
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md) *** | Externe Netzanschlüsse | SOLLTE | den Inhalt unverschlüsselter und verschlüsselter Verbindungen | basierend auf der Art des Inhalts | einschränken | Firewallregeln | >Architektur für Externe Netzanschlüsse SOLLTE den Inhalt unverschlüsselter und verschlüsselter Verbindungen basierend auf der Art des Inhalts einschränken.

> [!info]- Guidance
>Verschlüsselte Verbindungen wie VoIP über TLS oder HTTPS-Anfragen können über Sicherheitsproxies oder die Inspektion auf den Endstellen der Verbindungen inspiziert werden. Ein Proxy bzw. Proxy-Server ist ein Vermittler im Netz, der zwischen dem Client und einer Netzressource, wie einer Webseite, fungiert. Er dient als Brücke zwischen dem Client und dem Server, wobei Anfragen und Antworten stellvertretend abgewickelt werden. Proxys können Datenverkehr filtern, blockieren, oder auch speichern, um die Netzwerkleistung zu optimieren. Systeme zur Filterung von Webinhalten gehören zu den häufigsten Arten von Proxyservern, die zur Vermittlung des Internetzugangs eingesetzt werden. Diese Server können TCP-Sitzungen protokollieren und die Zugriffskontrolle durch Blockieren bestimmter URLs, IP-Adressen oder Domänennamen erzwingen. Institutionen können Web-Proxys mit benutzerdefinierten Erlaubnis- und Sperrlisten konfigurieren, um den Zugriff auf der Grundlage von Richtlinien zu regeln. Es ist jedoch zu beachten, dass Proxyserver die Nutzung virtueller privater Netzwerke (VPN) beeinträchtigen und je nach Implementierung Risiken wie Man-in-the-Middle-Angriffe (MitM) mit sich bringen können. Beispiel-Implementierungen sind Squid, Nginx, Privoxy.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 657f0690-9aaf-42fb-8474-3986a22277c8 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 657f0690-9aaf-42fb-8474-3986a22277c8 |
