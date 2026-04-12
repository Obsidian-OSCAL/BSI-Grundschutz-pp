---
tags:
- arch34-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.3.4 Verschlüsselte Netzanbindung
stmt_target_object_category: WLANs
stmt_modal_verb: SOLLTE
stmt_action_word: verschlüsseln
stmt_documentation: Konfigurationshistorie
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.3.4 - Verschlüsselte Netzanbindung
Gruppe: [ARCH.3 Wireless LAN](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.3%20Wireless%20LAN.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Wireless LAN](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.3%20Wireless%20LAN.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [WLANs](target_object_categories_WLANs_82a399a2-2fa7-4dd2-9850-89a7ee0505ea) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Netzanbindung | {{nach einem anerkannten Standard}} | [verschlüsseln](action_words_verschlüsseln_4dc9ef92-2124-449a-9a99-61095d271599) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für WLANs SOLLTE die Netzanbindung {{ insert: param, arch.3.4-prm1 }} verschlüsseln.</span>

> [!info]- Guidance
>Ohne eine sichere Verschlüsselung könnte ein Angreifer durch „Sniffing“ sensible Inhalte wie Passwörter, E-Mails oder Geschäftsdaten abfangen oder sogar schadhaften Datenverkehr in die Kommunikation einschleusen. Ebenso könnte ein schwacher oder veralteter Standard wie WEP einem Angreifer ermöglichen, das WLAN-Passwort innerhalb weniger Minuten zu knacken und damit vollständigen Netzzugang zu erlangen. Eine zeitgemäße und wirksame Verschlüsselung kann dagegen die Vertraulichkeit und Integrität der Kommunikation sicherstellen und bietet Schutz vor Angriffen wie „Man-in-the-Middle“-Manipulationen oder unerwünschtem Zugriff über „Rogue Clients“. Netzanbindung bedeutet hier, dass nicht nur die über das Netz transportierten Daten verschlüsselt werden, sondern auch die Kommunikation selbst, z.B. die Adressen kommunizierender Geräte. Anerkannten Standards meint z.B. WPA3-Enterprise mit 802.1X und EAP-TLS. Für Details siehe IEEE 80211, WPA3.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 45bb11ba-1018-430e-be4f-7cae54407f3c |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 45bb11ba-1018-430e-be4f-7cae54407f3c |
