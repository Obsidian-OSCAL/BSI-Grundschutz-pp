---
tags: arch34-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.3.4 Verschlüsselte Netzanbindung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.3.4 - Verschlüsselte Netzanbindung
Gruppe: [ARCH.3 Wireless LAN](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.3%20Wireless%20LAN.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Wireless LAN](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.3%20Wireless%20LAN.md) *** | WLANs | SOLLTE | die Netzanbindung | {{nach einem anerkannten Standard}} | verschlüsseln | Konfigurationshistorie | >Architektur für WLANs SOLLTE die Netzanbindung {{ insert: param, arch.3.4-prm1 }} verschlüsseln.

> [!info]- Guidance
>Ohne eine sichere Verschlüsselung könnte ein Angreifer durch „Sniffing“ sensible Inhalte wie Passwörter, E-Mails oder Geschäftsdaten abfangen oder sogar schadhaften Datenverkehr in die Kommunikation einschleusen. Ebenso könnte ein schwacher oder veralteter Standard wie WEP einem Angreifer ermöglichen, das WLAN-Passwort innerhalb weniger Minuten zu knacken und damit vollständigen Netzzugang zu erlangen. Eine zeitgemäße und wirksame Verschlüsselung kann dagegen die Vertraulichkeit und Integrität der Kommunikation sicherstellen und bietet Schutz vor Angriffen wie „Man-in-the-Middle“-Manipulationen oder unerwünschtem Zugriff über „Rogue Clients“. Netzanbindung bedeutet hier, dass nicht nur die über das Netz transportierten Daten verschlüsselt werden, sondern auch die Kommunikation selbst, z.B. die Adressen kommunizierender Geräte. Anerkannten Standards meint z.B. WPA3-Enterprise mit 802.1X und EAP-TLS. Für Details siehe IEEE 80211, WPA3.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 45bb11ba-1018-430e-be4f-7cae54407f3c |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 45bb11ba-1018-430e-be4f-7cae54407f3c |
