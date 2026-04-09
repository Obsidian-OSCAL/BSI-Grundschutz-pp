---
tags: Internet_Exposure
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.5 Deaktivierung von Split Tunneling
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.5 - Deaktivierung von Split Tunneling
Tags: "[Internet Exposure](tags_Internet Exposure)"
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.5%20Perimeterschutz.md) *** | Externe Netzanschlüsse | SOLLTE | Split Tunneling |  | blockieren | Firewallregeln | >Architektur für Externe Netzanschlüsse SOLLTE Split Tunneling blockieren.

> [!info]- Guidance
>Um eine durchgehende Kontrolle und Absicherung des Netzverkehrs zu gewährleisten, muss verhindert werden, dass IT-Clients während einer aktiven Verbindung zum internen Netz gleichzeitig ungeschützten Zugriff auf das öffentliche Internet oder andere Netzwerke haben. Dies schließt sogenannte „Split Tunneling“-Konfigurationen aus, bei denen nur ausgewählter Datenverkehr über das VPN geleitet wird, während anderer Datenverkehr (z. B. Webzugriffe) über das lokale Netzwerk oder die Internetverbindung des Clients erfolgt.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 7ff5e3bc-64e8-4487-a77a-c4897f97431d |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 7ff5e3bc-64e8-4487-a77a-c4897f97431d |
